const fs = require('fs');
const content = fs.readFileSync('d:/Projetos/ODE/report-ode.html', 'utf8');
const match = content.match(/window\.__LIGHTHOUSE_JSON__ = (\{.*\});/);
if (match) {
    const data = JSON.parse(match[1]);
    const results = {
        scores: {},
        failedAudits: [],
        lcpElement: null,
        consoleErrors: [],
        imageIssues: [],
        unusedJs: []
    };

    // Scores
    for (const key in data.categories) {
        results.scores[key] = data.categories[key].score;
    }

    // Failed Audits
    for (const id in data.audits) {
        const audit = data.audits[id];
        if (audit.score !== 1 && audit.score !== null) {
            results.failedAudits.push({
                id,
                title: audit.title,
                score: audit.score,
                displayValue: audit.displayValue,
                description: audit.description
            });
        }
    }

    // Specifics
    if (data.audits['largest-contentful-paint-element']) {
        results.lcpElement = data.audits['largest-contentful-paint-element'].displayValue;
    }
    if (data.audits['errors-in-console'] && data.audits['errors-in-console'].details) {
        results.consoleErrors = data.audits['errors-in-console'].details.items;
    }
    if (data.audits['unsized-images'] && data.audits['unsized-images'].details) {
        results.imageIssues = data.audits['unsized-images'].details.items;
    }
    if (data.audits['unused-javascript'] && data.audits['unused-javascript'].details) {
        results.unusedJs = data.audits['unused-javascript'].details.items;
    }

    fs.writeFileSync('lighthouse_full_analysis.json', JSON.stringify(results, null, 2));
    console.log('Análise completa gerada em lighthouse_full_analysis.json');
} else {
    console.log('Não foi possível encontrar o JSON no relatório HTML.');
}
