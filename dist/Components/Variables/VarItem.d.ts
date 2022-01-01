import VariableType from "../VariableType";
declare class VarItem extends VariableType {
    constructor(name: string, scope: "saved" | "game" | "local" | "unsaved", slot: number);
    compile(): {
        item: {
            id: string;
            data: any;
        };
        slot: string;
    };
}
export default VarItem;
