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
    const pf = pdfFormatParser.parser(data);

    console.log('Header:', pf.Header)
    console.log('File Trailer: ', pf.FileTrailer)
})
```
return Obj Contents:
```
{
    Header,
    Body,
    CrossReferenceTable,
    FileTrailer
}
```

## License
MIT