export function parser(hex) {
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