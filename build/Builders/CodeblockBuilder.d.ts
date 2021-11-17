import Codeblock from "../Components/Codeblock";
interface BlockOptions {
    mcBlockNameId?: string;
    name: string;
    action?: string;
    footer?: string;
}
export default class CodeblockBuiler {
    blockOptions: BlockOptions;
    codeblocks: Codeblock[];
    constructor(blockOptions: BlockOptions, codeblocks: Codeblock[]);
    add(...codeblocks: Codeblock[]): void;
    remove(index: number): void;
}
export {};
