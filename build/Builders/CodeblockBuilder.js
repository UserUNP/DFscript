"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CodeblockBuiler {
    blockOptions;
    codeblocks;
    constructor(blockOptions, codeblocks) {
        this.blockOptions = blockOptions;
        this.codeblocks = codeblocks;
    }
    add(...codeblocks) { codeblocks.forEach(block => this.codeblocks.push(block)); }
    remove(index) { this.codeblocks.splice(index, 1); }
}
exports.default = CodeblockBuiler;
//# sourceMappingURL=CodeblockBuilder.js.map