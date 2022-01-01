import VariableType from "../VariableType";
import TextComponent from "../TextComponent";
declare class Item extends VariableType {
    constructor(text: string | TextComponent, MCitemIdName: string, slot: number);
    compile(): {
        item: {
            id: string;
            data: any;
        };
        slot: string;
    };
}
export default Item;
