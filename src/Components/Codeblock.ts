import CodeblockBuilder from "../Builders/CodeblockBuilder";

export default interface Codeblock {
    id: "block",
    block: string,
    args: { "items": { "item": { "id": string, "data": any }, "slot": string }[] },
    action: string,
    target?: string,
    dfscript__ifstatementContent?: Codeblock[] | CodeblockBuilder[],
    then?(codeblocks: Codeblock[] | CodeblockBuilder[]): any
}