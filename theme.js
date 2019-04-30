import {createTheme as familyTheme} from './themes/familyTheme.js'
import {createTheme as gamerTheme} from './themes/gamerTheme.js'

const family = "family";
const gamer = "gamer";

export default function createTheme(theme) {
    if(theme == family) {
        return familyTheme;
    }
    if(theme == gamer) {
        return gamerTheme;
    }
}
