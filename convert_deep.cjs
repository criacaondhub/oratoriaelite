const fs = require('fs');
const path = require('path');

const targetDirs = [
    'c:\\Users\\Web 2\\Desktop\\ODE\\src\\components',
    'c:\\Users\\Web 2\\Desktop\\ODE\\src\\pages'
];

// Re-defining regex to catch more patterns or fix specific ones
// 1. Existing conversion catch (to make sure we are not missing anything)
const genericRegex = /(md|lg|xl|2xl):([a-z0-9-]*?)\[(\d+)px\]/g;

// 2. Specific fix for Hero scroll indicator translate (h, w, y)
// and other fixed pixel classes in desktop breakpoints

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.css')) {
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

        // Convert Tailwind arbitrary values
        let newContent = content.replace(genericRegex, (match, prefix, prop, pxValue) => {
            const vwValue = (parseInt(pxValue) / 19.2).toFixed(4);
            converted = true;
            return `${prefix}:${prop}[${vwValue}vw]`;
        });

        // Specific fix for Hero.tsx scroll indicator which uses static CSS or complex classes
        if (filePath.includes('Hero.tsx')) {
            // w-[30px] h-[50px] gap-2 bottom-10
            // These should probably be md: equivalent or they are inside a hidden lg:flex block
            // The user said scroll animation is not in vw
            newContent = newContent.replace(/className="absolute bottom-10/g, 'className="absolute bottom-[2.0833vw]');
            newContent = newContent.replace(/w-\[30px\]/g, 'w-[1.5625vw]');
            newContent = newContent.replace(/h-\[50px\]/g, 'h-[2.6042vw]');
            newContent = newContent.replace(/gap-2/g, 'gap-[0.4167vw]');
            // motion.div y: [0, 15, 0]
            newContent = newContent.replace(/y: \[0, 15, 0\]/g, 'y: [0, "0.7813vw", 0]');
            converted = true;
        }

        // About.tsx: max-w-[550px], w-[180px], sm:w-[150px]
        if (filePath.includes('About.tsx')) {
            newContent = newContent.replace(/max-w-\[550px\]/g, 'max-w-[28.6458vw]');
            newContent = newContent.replace(/w-\[180px\]/g, 'w-[9.3750vw]');
            converted = true;
        }

        // Pandemic.tsx: max-w-[750px]
        if (filePath.includes('Pandemic.tsx')) {
            newContent = newContent.replace(/max-w-\[750px\]/g, 'max-w-[39.0625vw]');
            converted = true;
        }

        // Method.tsx: w-[320px], max-w-[780px]
        if (filePath.includes('Method.tsx')) {
             newContent = newContent.replace(/w-\[320px\]/g, 'w-[16.6667vw]');
             newContent = newContent.replace(/max-w-\[780px\]/g, 'xl:max-w-[40.6250vw] max-w-[780px]');
             converted = true;
        }
        
        // Footert.tsx: py-[50px] px-[15px] max-w-[1200px]
        if (filePath.includes('Footer.tsx')) {
            newContent = newContent.replace(/py-\[50px\]/g, 'md:py-[2.6042vw] py-12');
            newContent = newContent.replace(/px-\[15px\]/g, 'md:px-[0.7813vw] px-4');
            newContent = newContent.replace(/max-w-\[1200px\]/g, 'max-w-[62.5000vw]');
            converted = true;
        }

        if (converted && newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Converted: ${filePath}`);
        }
    });
});

// embla.css conversion
const cssPath = 'c:\\Users\\Web 2\\Desktop\\ODE\\src\\components\\ui\\embla.css';
if (fs.existsSync(cssPath)) {
    let cssContent = fs.readFileSync(cssPath, 'utf8');
    cssContent = cssContent.replace(/--slide-height: 440px;/g, '--slide-height: 22.9167vw;');
    cssContent = cssContent.replace(/--slide-size: 293px;/g, '--slide-size: 15.2604vw;');
    cssContent = cssContent.replace(/padding: 0 4rem;/g, 'padding: 0 4.1667vw;');
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log(`Converted: ${cssPath}`);
}

console.log('Deep Conversion complete!');
