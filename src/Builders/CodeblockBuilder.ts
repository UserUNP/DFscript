import Codeblock from "../Components/Codeblock";

interface BlockOptions {
	mcBlockNameId?: string,
	name: string,
	action?: string,
	footer?: string
}

export default class CodeblockBuiler {
	constructor(public blockOptions: BlockOptions, public codeblocks: Codeblock[]) {}
	public add(...codeblocks: Codeblock[]): void {codeblocks.forEach(block => this.codeblocks.push(block))}
	public remove(index: number):void {this.codeblocks.splice(index, 1)}
}