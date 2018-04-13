export function parse(hex) {
    const string = hex.toString();

    const Header = string.substring(0, 8);
    const Body = string.substring(8, string.indexOf('xref'));
    const FileTrailer = string.substring(
        string.indexOf('trailer'), string.indexOf('%EOF') + 4);
    const CrossReferenceTable = string.substring(
        string.indexOf('xref'), string.indexOf('trailer'));
    
    return {
        Header,
        Body,
        CrossReferenceTable,
        FileTrailer
    }
}

export function getHeader(hex) {
    const string = hex.toString();
    return string.substring(0, 8);
}
export function getBody(hex) {
    const string = hex.toString();
    return string.substring(8, string.indexOf('xref'));
}
export function getFileTrailer(hex) {
    const string = hex.toString();
    return string.substring(
        string.indexOf('trailer'), string.indexOf('%EOF') + 4);
}
export function getCrossReferenceTable(hex) {
    const string = hex.toString();
    return string.substring(
        string.indexOf('xref'), string.indexOf('trailer'));
}