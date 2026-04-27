const fs = require('fs');
const content = fs.readFileSync('d:/Projetos/ODE/report-ode.html', 'utf8');
const match = content.match(/window\.__LIGHTHOUSE_JSON__ = (\{.*\});/);
if (match) {
    const data = JSON.parse(match[1]);
    const lcpAudit = data.audits['largest-contentful-paint-element'];
    if (lcpAudit && lcpAudit.details && lcpAudit.details.items) {
        console.log('LCP Element Details:', JSON.stringify(lcpAudit.details.items, null, 2));
    } else {
        console.log('LCP Element audit not found or has no details.');
    }
} else {
    console.log('Could not find JSON in report.');
}
