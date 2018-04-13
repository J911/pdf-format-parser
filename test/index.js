const fs = require('fs');
const pdfFormatParser = require('../');

fs.readFile('./hello.pdf', (err, data) => {
    const pf = pdfFormatParser.parser(data);

    console.log('Header:', pf.Header)
    console.log('File Trailer: ', pf.FileTrailer)
})
