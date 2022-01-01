"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const VariableType_1 = (0, tslib_1.__importDefault)(require("../VariableType"));
class Vector extends VariableType_1.default {
    constructor(value, slot) {
        super(value, slot);
    }
    compile() {
        return { "item": { "id": "vec", "data": this.value }, "slot": `${this.slot}` };
    }
}
exports.default = Vector;
//# sourceMappingURL=Vector.js.map