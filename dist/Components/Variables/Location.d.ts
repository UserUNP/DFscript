import VariableType from "../VariableType";
declare class Location extends VariableType {
    constructor(x: number, y: number, z: number, slot: number);
    compile(): {
        item: {
            id: string;
            data: any;
        };
        slot: string;
    };
}
export default Location;
