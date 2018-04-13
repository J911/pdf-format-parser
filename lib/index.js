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

    return {
        Header: getHeader(hex),
        Body: getBody(hex),
        CrossReferenceTable: getCrossReferenceTable(hex),
        FileTrailer: getFileTrailer(hex)
    };
}

function getHeader(hex) {
    return hex.slice(0, 8);
}
function getBody(hex) {
    return hex.slice(8, hex.indexOf('xref'));
}
function getFileTrailer(hex) {
    return hex.slice(hex.indexOf('trailer'), hex.indexOf('%EOF') + 4);
}
function getCrossReferenceTable(hex) {
    return hex.slice(hex.indexOf('xref'), hex.indexOf('trailer'));
}