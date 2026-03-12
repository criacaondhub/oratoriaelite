const fs = require('fs');
const path = require('path');

const targetDirs = [
    'c:\\Users\\Web 2\\Desktop\\ODE\\src\\components',
    'c:\\Users\\Web 2\\Desktop\\ODE\\src\\pages'
];

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath));
        } else {
            if (filePath.endsWith('.tsx')) {
                results.push(filePath);
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

        // Convert specific classes that are often missed
        // text-[14px], text-[16px], h-16, w-16, gap-4, etc in md: or lg: context
        // But the user specifically mentioned News, Carousel, Testimonials, Pricing, About, Footer

        // Testimonials.tsx: rounded-[2rem], shadow, p-8, p-10, gap-6, gap-10, max-w-[430px]
        if (filePath.includes('Testimonials.tsx')) {
            content = content.replace(/rounded-\[2rem\]/g, 'md:rounded-[1.6667vw] rounded-[2rem]');
            content = content.replace(/p-8 md:p-10/g, 'p-8 md:p-[2.6042vw]');
            content = content.replace(/gap-6 md:gap-10/g, 'gap-6 md:gap-[2.6042vw]');
            content = content.replace(/max-w-\[430px\]/g, 'md:max-w-[22.3958vw]');
            content = content.replace(/w-16 h-16/g, 'md:w-[3.3333vw] md:h-[3.3333vw] w-16 h-16');
            content = content.replace(/text-lg/g, 'md:text-[0.9375vw] text-lg');
            content = content.replace(/text-sm/g, 'md:text-[0.7292vw] text-sm');
            converted = true;
        }

        // Pricing.tsx: w-[200px], w-[300px], rounded-[24px], p-2
        if (filePath.includes('Pricing.tsx')) {
            content = content.replace(/w-\[200px\] sm:w-\[280px\]/g, 'md:w-[14.5833vw] w-[200px]');
            content = content.replace(/max-w-\[300px\]/g, 'max-w-[15.6250vw]');
            content = content.replace(/rounded-\[24px\]/g, 'md:rounded-[1.2500vw] rounded-[24px]');
            content = content.replace(/gap-4/g, (m, offset, str) => {
                // Only if not inside a mobile class
                return 'md:gap-[0.8333vw] gap-4';
            });
            converted = true;
        }

        // About.tsx: rounded-2xl, gap-12, gap-20, p-6, p-16
        if (filePath.includes('About.tsx')) {
            content = content.replace(/rounded-2xl/g, 'md:rounded-[0.8333vw] rounded-2xl');
            content = content.replace(/gap-12 lg:gap-20/g, 'gap-12 lg:gap-[5.2083vw]');
            content = content.replace(/p-6 md:p-16/g, 'p-6 md:p-[4.1667vw]');
            content = content.replace(/md:text-6xl/g, 'md:text-[3.1250vw]');
            content = content.replace(/md:text-lg/g, 'md:text-[0.9375vw]');
            converted = true;
        }

        if (converted) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Deep Converted Manual: ${filePath}`);
        }
    });
});
