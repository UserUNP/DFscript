"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const VariableType_1 = (0, tslib_1.__importDefault)(require("../VariableType"));
class VarItem extends VariableType_1.default {
    constructor(name, scope, slot) {
        if (scope == "game")
            scope = "unsaved";
        super({ name: name, scope: scope }, slot);
    }
    compile() {
        return { "item": { "id": "var", "data": { "name": `${this.value.name}`, "scope": `${this.value.scope}` } }, "slot": `${this.slot}` };
    }
}
exports.default = VarItem;
//# sourceMappingURL=VarItem.js.map