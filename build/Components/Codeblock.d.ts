export default interface Codeblock {
    id: "block";
    block: string;
    args: {
        "items": {
            "item": {
                "id": string;
                "data": any;
            };
            "slot": string;
        }[];
    };
    action: string;
    target: string;
    dfjs__ifstatementContent?: Codeblock[];
}
