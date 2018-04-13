'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parser = parser;
function parser(hex) {
    var string = hex.toString();

    var Header = string.substring(0, 8);
    var Body = string.substring(8, string.indexOf('xref'));
    var FileTrailer = string.substring(string.indexOf('trailer'), string.indexOf('%EOF') + 4);
    var CrossReferenceTable = string.substring(string.indexOf('xref'), string.indexOf('trailer'));

    return {
        Header: Header,
        Body: Body,
        CrossReferenceTable: CrossReferenceTable,
        FileTrailer: FileTrailer
    };
}