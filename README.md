# PDF-FORMAT-PARSER
Modules for classifying pdf for format

## Install
```
npm install --save pdf-format-parser
```
## Use
```
const fs = require('fs');
const pdfFormatParser = require('../');

fs.readFile('./hello.pdf', (err, data) => {
    const pf = pdfFormatParser.parse(data);

    console.log('Header:', pf.Header)
    console.log('File Trailer: ', pf.FileTrailer)
    console.log('File Trailer: ', pdfFormatParser.getCrossReferenceTable(data))
});
```

## Method
- parse(data) 

    return {
        Header,
        Body,
        CrossReferenceTable,
        FileTrailer
    }

- getHeader(data)

    return Header
- getBody(data)

    return Body
- getCrossReferenceTable(data)

    return CrossReferenceTable
- getFileTrailer(data)

    return FileTrailer

## License
MIT