import Codeblock from "../Components/Codeblock";

export default class CodeblockBuilder {
	constructor(public codeblocks: Codeblock[]) {}
	public add(...codeblocks: Codeblock[]): void {codeblocks.forEach(block => this.codeblocks.push(block))}
	public remove(index: number):void {this.codeblocks.splice(index, 1)}
}