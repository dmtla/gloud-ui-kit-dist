import sassColors from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../colors.scss';
import sassScreenSizes from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../screenSizes.scss';

const extractorColor = (prop) => sassColors[prop];
const extractorScreenSize = (prop) => sassScreenSizes[prop];

const colors = {
    accent: extractorColor('lipstick'),
    accentCompanion: extractorColor('purple'),
    accentInverted: extractorColor('aquamarine'),
    accentInvertedCompanion: extractorColor('tulipTree'),
    colorBrandBase: extractorColor('silverSand'),
    primaryButton: extractorColor('rouge'),
    primaryButtonCompanion: extractorColor('finn'),
    invertedPrimaryButton: extractorColor('aquamarine'),
    invertedPrimaryButtonCompanion: extractorColor('springGreen')
}

const fontFamilies = {
    title: 'Flama-Bold',
    text: 'Flama-Book',
    strong: 'Flama-Bold',
    light: `Flama-Light`,
    semiBold: `Flama-Semibold`,
    legalDisclaimer: 'FlamaCondensed-Book',
    h2: `Flama-Light`
}

const fontSizes = {
    small: '1rem',
    medium: '1.3rem',
    large: '1.6rem',
    h1: '2.4rem',
    button: '2rem',
    cardTitle: '1.6rem',
}

const margins = {
    left: '15px',
    catalogGap: '1rem'
}

const screenSizes = {
    maxMobile: extractorScreenSize('screenXsMax'),
    maxNotebook: extractorScreenSize('screenMdMax')
}

const catalog = {
    gameRowTitle: `1.75rem`,
    portraitWidth: `15rem`,
    landscapeWidth: `31rem`,
    sidebarWidth: '10vh'
}

const sidebar = {
    colapsedWidth: '7vh',
    expandedWidth: '27vh'
}


export const theme = {
    colors, fontFamilies, fontSizes, margins, screenSizes, catalog, sidebar
}
