const fs = require('fs');
const pdfFormatParser = require('../');

fs.readFile('./hello.pdf', (err, data) => {
    const pf = pdfFormatParser.parse(data);

    console.log('Header:', pf.Header)
    console.log('File Trailer: ', pf.FileTrailer)
    console.log('Cross Reference Table: ', pdfFormatParser.getCrossReferenceTable(data))
})
