const fs = require('fs');
const path = require('path');

// Directories and files to clean
const pathsToClean = [
  'out',
  'build', // Keep for backward compatibility
  '.next',
  'tsconfig.tsbuildinfo',
  'dist'
];

// Function to recursively remove directory with retry mechanism
async function removeDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  try {
    await fs.promises.rm(dirPath, { 
      recursive: true, 
      force: true,
      maxRetries: 3,
      retryDelay: 100 
    });
    console.log(`✓ Removed: ${dirPath}`);
  } catch (error) {
    console.warn(`⚠ Could not remove ${dirPath}: ${error.message}`);
    
    // Fallback: try to remove contents individually
    try {
      if (fs.statSync(dirPath).isDirectory()) {
        const items = fs.readdirSync(dirPath);
        for (const item of items) {
          const itemPath = path.join(dirPath, item);
          try {
            if (fs.statSync(itemPath).isDirectory()) {
              await removeDirectory(itemPath);
            } else {
              await fs.promises.unlink(itemPath);
            }
          } catch (itemError) {
            console.warn(`⚠ Could not remove ${itemPath}: ${itemError.message}`);
          }
        }
        
        // Try to remove the empty directory
        try {
          await fs.promises.rmdir(dirPath);
          console.log(`✓ Removed empty directory: ${dirPath}`);
        } catch (rmdirError) {
          console.warn(`⚠ Could not remove empty directory ${dirPath}: ${rmdirError.message}`);
        }
      }
    } catch (fallbackError) {
      console.warn(`⚠ Fallback cleanup failed for ${dirPath}: ${fallbackError.message}`);
    }
  }
}

// Function to remove file
async function removeFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  try {
    await fs.promises.unlink(filePath);
    console.log(`✓ Removed: ${filePath}`);
  } catch (error) {
    console.warn(`⚠ Could not remove ${filePath}: ${error.message}`);
  }
}

// Main cleanup function
async function cleanBuild() {
  console.log('🧹 Cleaning build directories and files...\n');

  for (const cleanPath of pathsToClean) {
    const fullPath = path.resolve(cleanPath);
    
    if (fs.existsSync(fullPath)) {
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        await removeDirectory(fullPath);
      } else {
        await removeFile(fullPath);
      }
    } else {
      console.log(`ℹ Path doesn't exist: ${cleanPath}`);
    }
  }

  console.log('\n✨ Build cleanup completed!');
}

// Run cleanup
cleanBuild().catch(error => {
  console.error('❌ Error during cleanup:', error);
  process.exit(1);
}); 