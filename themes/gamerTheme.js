import colors from 'sassextractloader?{"plugins": ["sassextractjs"]}!../colors.scss';
import screenSizes from 'sassextractloader?{"plugins": ["sassextractjs"]}!../screenSizes.scss';


// Example
//export const extractColorsAccentBase = createExtractorFromTheme('colorsAccentBase')',

const colors = {
    accent: '#e20175',
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
