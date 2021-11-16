"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const VariableType_1 = (0, tslib_1.__importDefault)(require("../VariableType"));
class Location extends VariableType_1.default {
    constructor(x, y, z, slot) {
        super({ x: x, y: y, z: z }, slot);
    }
    compile() {
        return { "item": { "id": "loc", "data": { "loc": this.value } }, "slot": `${this.slot}` };
    }
}
exports.default = Location;
//# sourceMappingURL=Location.js.map