import PackedBlock from "../Builders/PackedBlock";

export default interface Codeblock {
    id: "block",
    block: string,
    args: { "items": { "item": { "id": string, "data": any }, "slot": string }[] },
    action: string,
    target?: string,
    dfscript__ifstatementContent?: Codeblock[] | PackedBlock[],
    then?(codeblocks: Codeblock[] | PackedBlock[]): any
}