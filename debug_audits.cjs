const fs = require('fs');
const content = fs.readFileSync('d:/Projetos/ODE/report-ode.html', 'utf8');
const match = content.match(/window\.__LIGHTHOUSE_JSON__ = (\{.*\});/);
if (match) {
    const data = JSON.parse(match[1]);
    console.log('Audits found:', Object.keys(data.audits).filter(k => k.includes('paint') || k.includes('lcp')));
}
