import VariableType from "../VariableType";
declare class Item extends VariableType {
    constructor(name: string, MCitemIdName: string, slot: number);
    compile(): {
        item: {
            id: string;
            data: any;
        };
        slot: string;
    };
}
export default Item;
