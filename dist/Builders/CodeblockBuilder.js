"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CodeblockBuilder {
    codeblocks;
    constructor(codeblocks) {
        this.codeblocks = codeblocks;
    }
    add(...codeblocks) { codeblocks.forEach(block => this.codeblocks.push(block)); }
    remove(index) { this.codeblocks.splice(index, 1); }
}
exports.default = CodeblockBuilder;
//# sourceMappingURL=CodeblockBuilder.js.map