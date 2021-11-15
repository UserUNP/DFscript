import Item from "../Item";
declare class Number extends Item {
    constructor(value: number, slot: number);
    compile(): {
        item: {
            id: string;
            data: any;
        };
        slot: string;
    };
}
export default Number;
