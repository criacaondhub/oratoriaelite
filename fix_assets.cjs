const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      filelist.push(dirFile);
    }
  }
  return filelist;
}

const files = walkSync(path.join(__dirname, 'src')).filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.jsx') || f.endsWith('.js'));
files.push(path.join(__dirname, 'index.html'));

let changedFiles = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  // Match "assets/ or 'assets/ but only if they are not already preceded by /oratoria-de-elite/
  // The regex matches a quote, then assets/
  // We use negative lookbehind if supported, or just string replacement carefully.
  // Replacing (["'])assets/ with $1/oratoria-de-elite/assets/
  const originalContent = content;
  content = content.replace(/(["'])assets\//g, '$1/oratoria-de-elite/assets/');
  
  if (originalContent !== content) {
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Updated: ${f}`);
    changedFiles++;
  }
});

console.log(`Total files updated: ${changedFiles}`);
