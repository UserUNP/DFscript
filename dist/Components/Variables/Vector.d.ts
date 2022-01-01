import VariableType from "../VariableType";
declare class Vector extends VariableType {
    constructor(value: number, slot: number);
    compile(): {
        item: {
            id: string;
            data: any;
        };
        slot: string;
    };
}
export default Vector;
