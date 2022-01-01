"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTextComponent = void 0;
const CODES = {
    COLORS: {
        "a": "green",
        "b": "aqua",
        "c": "red",
        "d": "light_purple",
        "e": "yellow",
        "f": "white",
        "1": "dark_blue",
        "2": "dark_green",
        "3": "dark_aqua",
        "4": "dark_red",
        "5": "dark_purple",
        "6": "gold",
        "7": "gray",
        "8": "dark_gray",
        "9": "blue",
        "0": "black"
    },
    FORMATS: {
        "k": "obfuscated",
        "l": "bold",
        "m": "strikethrough",
        "n": "underline",
        "o": "italic",
        "r": "reset"
    }
};
function toTextComponent(text) {
    return { text: text };
}
exports.toTextComponent = toTextComponent;
//# sourceMappingURL=TextComponent.js.map