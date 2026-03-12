const fs = require('fs');
const path = require('path');

const targetDirs = [
    'c:\\Users\\Web 2\\Desktop\\ODE\\src\\components',
    'c:\\Users\\Web 2\\Desktop\\ODE\\src\\pages'
];

const regex = /(md|lg|xl|2xl):([a-z0-9-]*?)\[(\d+)px\]/g;

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

targetDirs.forEach(dir => {
    const files = walk(dir);
    files.forEach(filePath => {
        let content = fs.readFileSync(filePath, 'utf8');
        let converted = false;

        const newContent = content.replace(regex, (match, prefix, prop, pxValue) => {
            const vwValue = (parseInt(pxValue) / 19.2).toFixed(4);
            converted = true;
            return `${prefix}:${prop}[${vwValue}vw]`;
        });

        if (converted && newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Converted: ${filePath}`);
        }
    });
});

console.log('Conversion complete!');
