import sassColors from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../colors.scss';
import sassScreenSizes from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../screenSizes.scss';

const extractorColor = (prop) => sassColors[prop];
const extractorScreenSize = (prop) => sassScreenSizes[prop];

const colors = {
    accent: extractorColor('colorsAccentBase'),
    accentCompanion: extractorColor('colorsAccentCompanion'),
    accentInverted: extractorColor('colorsAccentInvertedBase'),
    accentInvertedCompanion: extractorColor('colorsAccentInvertedCompanion'),
    colorBrandBase: extractorColor('colorBrandBase'),
    colorBrandDark: extractorColor('colorBrandDark'),
    colorSecondaryBase: extractorColor('colorSecondaryBase'),
    colorNeutralBase: extractorColor('colorNeutralBase'),
    colorSecondaryLight: extractorColor('colorSecondaryLight'),
    colorSecondaryLighter: extractorColor('colorSecondaryLighter'),
    colorSecondaryDark: extractorColor('colorSecondaryDark'),
    colorSecondaryDarker: extractorColor('colorSecondaryDarker'),
    colorTitle: extractorColor('colorTitle'),
}

const fontFamilies = {
    title: 'Flama-Bold',
    text: 'Flama-Book',
    strong: 'Flama-Bold',
    legalDisclaimer: 'FlamaCondensed-Book'
}

const fontSizes = {
    small: '1rem',
    medium: '1.3rem',
    large: '1.6rem',

}

const margins = {
    left: '15px'
}

const screenSizes = {
    maxMobile: extractorScreenSize('screenXsMax'),
    maxNotebook: extractorScreenSize('screenMdMax')

}

export const createTheme = {
    colors, fontFamilies, fontSizes, margins, screenSizes
}
