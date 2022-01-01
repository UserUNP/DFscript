"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const VariableType_1 = (0, tslib_1.__importDefault)(require("../VariableType"));
const TextComponent_1 = require("../TextComponent");
function convertHex(num) {
    var hex = num.toString(16);
    if (hex.length < 6 || hex.length > 6) {
        throw new Error(`invalid hex color! can't have a hex color ${hex.length < 6 ? "less" : "more"} than 6 characters!`);
    }
    try {
        hex = parseInt(hex);
    }
    catch (err) {
        throw new Error("invalid hex color!");
    }
    return hex;
}
class Item extends VariableType_1.default {
    constructor(text, MCitemIdName, slot) {
        if (typeof text === "string")
            super((0, TextComponent_1.toTextComponent)(text), slot);
        else {
            text["MCitemIdName"] = MCitemIdName;
            if (text["strikethrough"] == null)
                text["strikethrough"] = false;
            if (text["obfuscated"] == null)
                text["obfuscated"] = false;
            if (text["underline"] == null)
                text["underline"] = false;
            if (text["italic"] == null)
                text["italic"] = false;
            if (text["bold"] == null)
                text["bold"] = false;
            if (text["color"] == null)
                text["color"] = "white";
            else if (typeof text["color"] == "number")
                text["color"] = convertHex(text["color"]);
            super(text, slot);
        }
    }
    compile() {
        console.log(this.value);
        return { "item": { "id": "item", "data": { "item": `{id:\"minecraft:${this.value.MCitemIdName}\",tag:{Damage:0,display:{Name:'{\"extra\":[{\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"white\",\"text\":\"${this.value.text}\"}],\"text\":\"\"}'}},Count:1b}` } }, "slot": `${this.slot}` };
    }
}
exports.default = Item;
//# sourceMappingURL=Item.js.map