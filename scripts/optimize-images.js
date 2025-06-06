const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const QUALITY = 75;
const MAX_WIDTH = 1920;
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, 'optimized');

async function optimizeImage(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Only resize if image is wider than max width
    const width = metadata.width > MAX_WIDTH ? MAX_WIDTH : metadata.width;
    
    await image
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outputPath);
      
    const originalSize = (await stat(inputPath)).size;
    const optimizedSize = (await stat(outputPath)).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    
    console.log(`Optimized: ${path.relative(PUBLIC_DIR, inputPath)}`);
    console.log(`  Original: ${(originalSize / 1024).toFixed(2)}KB`);
    console.log(`  Optimized: ${(optimizedSize / 1024).toFixed(2)}KB`);
    console.log(`  Savings: ${savings}%`);
    
    return { originalSize, optimizedSize };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return { error: error.message };
  }
}

async function processDirectory(dir) {
  console.log(`Processing directory: ${dir}`);
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err);
    throw err; // Re-throw to be caught by main catch
  }
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(PUBLIC_DIR, fullPath);
    if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
      console.warn(`Skipping path potentially outside public directory: ${fullPath} (relative: ${relativePath})`);
      continue;
    }
    const optimizedPath = path.join(OPTIMIZED_DIR, relativePath).replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    if (entry.isDirectory()) {
      // Skip node_modules and .git directories
      if (['node_modules', '.git', 'optimized'].includes(entry.name)) {
        continue;
      }
      
      // Create corresponding directory in optimized folder
      const targetSubDirPath = path.join(OPTIMIZED_DIR, relativePath);
      console.log(`Ensuring subdirectory exists in optimized: ${targetSubDirPath}`);
      try {
        await mkdir(targetSubDirPath, { recursive: true });
      } catch (err) {
        console.error(`Error creating subdirectory ${targetSubDirPath}:`, err);
        throw err;
      }
      await processDirectory(fullPath);
    } else {
      // Process image files
      const ext = path.extname(entry.name).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        const targetFileParentDir = path.dirname(optimizedPath);
        console.log(`Ensuring parent directory for file exists in optimized: ${targetFileParentDir}`);
        try {
          await mkdir(targetFileParentDir, { recursive: true });
        } catch (err) {
          console.error(`Error creating parent directory ${targetFileParentDir} for file ${optimizedPath}:`, err);
          throw err;
        }
        await optimizeImage(fullPath, optimizedPath);
      }
    }
  }
}

async function main() {
  console.log('Starting image optimization...');
  console.log('Source directory:', PUBLIC_DIR);
  console.log('Optimized directory:', OPTIMIZED_DIR);
  
    try {
    if (fs.existsSync(OPTIMIZED_DIR)) {
      console.log(`Cleaning existing optimized directory: ${OPTIMIZED_DIR}`);
      fs.rmSync(OPTIMIZED_DIR, { recursive: true, force: true }); // Node.js v14.14.0+
      console.log(`Successfully cleaned ${OPTIMIZED_DIR}`);
    }
  } catch (err) {
    console.error(`Error cleaning optimized directory ${OPTIMIZED_DIR}. Please check permissions or manually delete it. Error:`, err);
    // Depending on the error, you might want to throw err here to stop the script
  }

  console.log(`Ensuring base optimized directory exists: ${OPTIMIZED_DIR}`);
  try {
    await mkdir(OPTIMIZED_DIR, { recursive: true });
    console.log(`Successfully ensured ${OPTIMIZED_DIR} exists.`);
  } catch (err) {
    console.error(`Error creating base optimized directory ${OPTIMIZED_DIR}:`, err);
    throw err; // Critical if this fails
  }
  
  // Process all images in the public directory
  await processDirectory(PUBLIC_DIR);
  
  console.log('Image optimization complete!');}

// Run the script
main().catch(console.error);
