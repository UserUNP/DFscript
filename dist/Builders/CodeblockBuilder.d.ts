import Codeblock from "../Components/Codeblock";
export default class CodeblockBuilder {
    codeblocks: Codeblock[];
    constructor(codeblocks: Codeblock[]);
    add(...codeblocks: Codeblock[]): void;
    remove(index: number): void;
}
