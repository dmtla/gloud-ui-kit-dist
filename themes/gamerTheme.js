import colors from 'sassextract-loader?{"plugins": ["sassextractjs"]}!../colors.scss';
import screenSizes from 'sassextract-loader?{"plugins": ["sassextractjs"]}!../screenSizes.scss';

const extractorColor = (prop) => colors[prop];
export const extractColorsAccentBase = extractorColor('colorsAccentBase');

console.log(colors);

const colors = {
    accent: extractorColor('colorsAccentBase'),
    accentCompanion: '#a23964',
    accentInverted: '#00ffce',
  //  accentInvertedCompanion: darken(accentInverted, 7),
    secondary: '#002b44',
    secondaryDark: '#032232',
    primaryInverted: '#e4e4e4',
    neutral: '#77848a',
    title: '#344954',
    whiteSmoke: '#f3f3f3',
    neutralLighter: '#fafafa'
}

//Colors
/*
$gloudbackgroundcolor: secondary','
$gloudbackgrounddetailpagecolor: secondarydark','
$activebutton: accent','
$activebuttonhover: accentinverted','
$glouddetailtextcolor: neutral','
$gloudcleartextcolor: primaryinverted','
secondarybutton: '#18907e',
primarybuttonhover: accentinverted','
primarybuttonhovertext: black','
}*/

const fontFamilies = {}

const fontSizes = {}

const margins = {}

export const createTheme = {
    colors, fontFamilies, fontSizes, margins, screenSizes
}
