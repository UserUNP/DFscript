import VariableType from "../VariableType";
declare class Text extends VariableType {
    constructor(value: string, slot: number);
    compile(): {
        item: {
            id: string;
            data: any;
        };
        slot: string;
    };
}
export default Text;
