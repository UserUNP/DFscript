import VariableType from "../VariableType";

class Location extends VariableType {
    constructor(x: number, y: number, z: number, slot: number) {
        super({ x: x, y: y, z: z }, slot);
    }
    compile(): { item: { id: string; data: any; }; slot: string; } {
        return { "item": { "id": "loc", "data": { "loc": this.value } }, "slot": `${this.slot}` };
    }
}

export default Location;