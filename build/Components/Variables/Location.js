"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Item_1 = (0, tslib_1.__importDefault)(require("../Item"));
class Location extends Item_1.default {
    constructor(value, slot) {
        super(value, slot);
    }
    compile() {
        return { "item": { "id": "loc", "data": { "loc": this.value } }, "slot": `${this.slot}` };
    }
}
exports.default = Location;
//# sourceMappingURL=Location.js.map