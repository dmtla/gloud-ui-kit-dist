function defineFont({ fontFamily, fileName}) {
    const fontUrl = `fonts/${fileName}`;
    return `
        @font-face {
            font-family: ${fontFamily};
            src: url(${fontUrl}.otf) format('truetype'); /* Safari, Android, iOS */
            src: url(${fontUrl}.eot);
            src: url(${fontUrl}.eot?#iefix) format('embedded-opentype'),
            url(${fontUrl}.woff2) format('woff2'),
            url(${fontUrl}.woff) format('woff'),
            url(${fontUrl}.ttf) format('truetype'),
            url(${fontUrl}.svg#${fileName}) format('svg');
        }
    `;

}
function createFontObject(fontFamily, fileName) {
    return { fontFamily, fileName };
};

const fontsCSS = [
    createFontObject('Flama', 'Flama-Basic'),
    createFontObject('Flama-Bold', 'Flama-Bold'),
    createFontObject('Flama-Book', 'Flama-Book'),
    createFontObject('Flama-BookItalic', 'Flama-BookItalic'),
    createFontObject('Flama-Light', 'Flama-Light'),
    createFontObject('Flama-Medium', 'Flama-Medium'),
    createFontObject('Flama-MediumItal', 'Flama-MediumItalic'),
    createFontObject('Flama-Thin', 'Flama-Thin'),
    createFontObject('FlamaCondensed-Book', 'FlamaCondensed-Book'),
    createFontObject('FlamaCondensed-Medium', 'FlamaCondensed-Medium'),
    createFontObject('FlamaCondensed-Bold', 'FlamaCondensed-Bold')
].map(defineFont).join('');

export default fontsCSS;

