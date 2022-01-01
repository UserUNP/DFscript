export default abstract class VariableType {
    value: any;
    slot: number;
    constructor(value: any, slot: number);
    abstract compile(): {
        "item": {
            "id": string;
            "data": any;
        };
        "slot": string;
    };
}
