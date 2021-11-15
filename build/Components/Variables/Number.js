"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Item_1 = (0, tslib_1.__importDefault)(require("../Item"));
class Number extends Item_1.default {
    constructor(value, slot) {
        super(value, slot);
    }
    compile() {
        return { "item": { "id": "num", "data": { "name": `${this.value}` } }, "slot": `${this.slot}` };
    }
}
exports.default = Number;
//# sourceMappingURL=Number.js.map