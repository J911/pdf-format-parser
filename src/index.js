export function parse(hex) {

    return {
        Header: getHeader(hex),
        Body: getBody(hex),
        CrossReferenceTable: getCrossReferenceTable(hex),
        FileTrailer: getFileTrailer(hex)
    }
}

export function getHeader(hex) {
    return hex.slice(0, 8);
}
export function getBody(hex) {
    return hex.slice(8, hex.indexOf('xref'));
}
export function getFileTrailer(hex) {
    return hex.slice(
        hex.indexOf('trailer'), hex.indexOf('%EOF') + 4);
}
export function getCrossReferenceTable(hex) {
    return hex.slice(
        hex.indexOf('xref'), hex.indexOf('trailer'));
}