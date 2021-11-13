export default abstract class Item {
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
