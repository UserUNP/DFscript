"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const VariableType_1 = (0, tslib_1.__importDefault)(require("../VariableType"));
class Number extends VariableType_1.default {
    constructor(value, slot) {
        super(value, slot);
    }
    compile() {
        return { "item": { "id": "num", "data": { "name": `${this.value}` } }, "slot": `${this.slot}` };
    }
}
exports.default = Number;
//# sourceMappingURL=Number.js.map