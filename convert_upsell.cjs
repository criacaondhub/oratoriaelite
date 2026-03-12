const fs = require('fs');
const path = require('path');

const componentsDir = 'c:\\Users\\Web 2\\Desktop\\ODE\\src\\components\\sections';

const targetFiles = [
    'UpsellHero.tsx',
    'UpsellMethod.tsx',
    'UpsellMethod2.tsx',
    'UpsellPricing.tsx',
    'UpsellPricing2.tsx'
];

targetFiles.forEach(fileName => {
    const filePath = path.join(componentsDir, fileName);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let converted = false;

    // 1. Video Container (UpsellHero.tsx)
    if (fileName === 'UpsellHero.tsx') {
        content = content.replace(/max-w-\[850px\]/g, 'md:max-w-[44.2708vw] max-w-[850px]');
        converted = true;
    }

    // 2. Images in Method (UpsellMethod.tsx & UpsellMethod2.tsx)
    if (fileName.includes('UpsellMethod')) {
        // max-w-[340px] is already converted in md/lg classes in the file, 
        // but let's ensure consistency and fix the container gap if needed.
        content = content.replace(/max-w-\[4xl\]/g, 'md:max-w-[46.8750vw] max-w-4xl');
        converted = true;
    }

    // 3. Pricing Elements (UpsellPricing.tsx & UpsellPricing2.tsx)
    if (fileName.includes('UpsellPricing')) {
        content = content.replace(/w-\[200px\] sm:w-\[280px\]/g, 'md:w-[14.5833vw] w-[200px]');
        content = content.replace(/max-w-\[15.6250vw\]/g, 'md:max-w-[15.6250vw] max-w-[300px]'); // Fix for missed max-w
        content = content.replace(/max-w-\[300px\]/g, 'md:max-w-[15.6250vw] max-w-[300px]');
        content = content.replace(/rounded-\[24px\]/g, 'md:rounded-[1.2500vw] rounded-[24px]');
        content = content.replace(/w-\[59px\] h-\[59px\]/g, 'md:w-[3.0729vw] md:h-[3.0729vw] w-[59px] h-[59px]');
        converted = true;
    }

    if (converted) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Converted Upsell: ${fileName}`);
    }
});
