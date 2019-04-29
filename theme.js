import {createTheme as familyTheme} from 'themes/familyTheme'
import {createTheme as gamerTheme} from 'themes/gamerTheme'

const family = "family";
const gamer = "gamer";

export function createTheme(theme) {
    if(theme == family) {
        return familyTheme;
    }
    if(theme == gamer) {
        return gamerTheme;
    }
}
