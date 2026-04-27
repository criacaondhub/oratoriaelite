const fs = require('fs');
const content = fs.readFileSync('d:/Projetos/ODE/report-ode.html', 'utf8');
const match = content.match(/window\.__LIGHTHOUSE_JSON__ = (\{.*\});/);
if (match) {
    const data = JSON.parse(match[1]);
    const imageAudit = data.audits['image-delivery-insight'] || data.audits['modern-image-formats'] || data.audits['uses-optimized-images'];
    if (imageAudit && imageAudit.details && imageAudit.details.items) {
        console.log('Top Image Savings:');
        imageAudit.details.items.sort((a, b) => b.wastedBytes - a.wastedBytes).forEach(item => {
            console.log(`- ${item.url}: ${(item.wastedBytes / 1024).toFixed(2)} KB wasted`);
        });
    } else {
        console.log('No image savings audit found or no items.');
    }
}
