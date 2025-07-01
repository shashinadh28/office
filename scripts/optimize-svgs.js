const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, 'optimized');

// SVGO configuration
const svgoConfig = {
  multipass: true,
  js2svg: {
    pretty: false,
    indent: 2,
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIDs: false, // Disable ID cleaning and minification
          convertPathData: {
            noSpaceAfterFlags: false,
          },
        },
      },
    },
    'removeXMLNS',
    'sortAttrs',
    'removeDimensions',
    'removeScriptElement',
    'removeStyleElement',
    'removeXMLProcInst',
    'removeDoctype',
  ],
};

async function optimizeSvg(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    const result = optimize(content, {
      ...svgoConfig,
      path: filePath,
    });
    
    if (result.error) {
      console.error(`Error optimizing ${filePath}:`, result.error);
      return null;
    }
    
    return result.data;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
  }
}

async function processDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip node_modules, .git, and optimized directories
      if (['node_modules', '.git', 'optimized'].includes(entry.name)) {
        continue;
      }
      await processDirectory(fullPath);
    } else if (entry.name.toLowerCase().endsWith('.svg')) {
      const relativePath = path.relative(PUBLIC_DIR, fullPath);
      const optimizedPath = path.join(OPTIMIZED_DIR, relativePath);
      
      // Create directory structure in optimized folder
      await mkdir(path.dirname(optimizedPath), { recursive: true });
      
      const optimizedSvg = await optimizeSvg(fullPath);
      
      if (optimizedSvg) {
        const originalSize = (await stat(fullPath)).size;
        await writeFile(optimizedPath, optimizedSvg);
        const optimizedSize = (await stat(optimizedPath)).size;
        
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
        
        console.log(`Optimized: ${relativePath}`);
        console.log(`  Original: ${(originalSize / 1024).toFixed(2)}KB`);
        console.log(`  Optimized: ${(optimizedSize / 1024).toFixed(2)}KB`);
        console.log(`  Savings: ${savings}%`);
      }
    }
  }
}

async function main() {
  console.log('Starting SVG optimization...');
  console.log('Source directory:', PUBLIC_DIR);
  console.log('Optimized directory:', OPTIMIZED_DIR);
  
  // Create optimized directory if it doesn't exist
  await mkdir(OPTIMIZED_DIR, { recursive: true });
  
  // Process all SVGs in the public directory
  await processDirectory(PUBLIC_DIR);
  
  console.log('SVG optimization complete!');
}

main().catch(console.error);
