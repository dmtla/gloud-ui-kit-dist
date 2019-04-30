import {createTheme as familyTheme} from './themes/familyTheme.js'
import {createTheme as gamerTheme} from './themes/gamerTheme.js'

export const themeNames = {
    FAMILY: "family",
    GAMER: "gamer"
}

export default function createTheme(theme) {
    if(themeNames.FAMILY == theme) {
        return familyTheme;
    }
    if(themeNames.GAMER == gamer) {
        return gamerTheme;
    }
}
