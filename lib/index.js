'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parse = parse;
exports.getHeader = getHeader;
exports.getBody = getBody;
exports.getFileTrailer = getFileTrailer;
exports.getCrossReferenceTable = getCrossReferenceTable;
function parse(hex) {
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

function getHeader(hex) {
    var string = hex.toString();
    return string.substring(0, 8);
}
function getBody(hex) {
    var string = hex.toString();
    return string.substring(8, string.indexOf('xref'));
}
function getFileTrailer(hex) {
    var string = hex.toString();
    return string.substring(string.indexOf('trailer'), string.indexOf('%EOF') + 4);
}
function getCrossReferenceTable(hex) {
    var string = hex.toString();
    return string.substring(string.indexOf('xref'), string.indexOf('trailer'));
}