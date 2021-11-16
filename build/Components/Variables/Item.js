"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const VariableType_1 = (0, tslib_1.__importDefault)(require("../VariableType"));
class Item extends VariableType_1.default {
    constructor(name, MCitemIdName, slot) {
        super({ name: name, MCitemIdName: MCitemIdName }, slot);
    }
    compile() {
        return { "item": { "id": "item", "data": { "item": `{id:\"minecraft:${this.value.MCitemIdName}\",tag:{Damage:0,display:{Name:'{\"extra\":[{\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"white\",\"text\":\"${this.value.name}\"}],\"text\":\"\"}'}},Count:1b}` } }, "slot": `${this.slot}` };
    }
}
exports.default = Item;
//# sourceMappingURL=Item.js.map