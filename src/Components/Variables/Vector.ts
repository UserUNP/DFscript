import VariableType from "../VariableType";

class Vector extends VariableType {
    constructor(value: number, slot: number) {
        super(value, slot);
    }
    compile(): { item: { id: string; data: any; }; slot: string; } {
        return { "item": { "id": "vec", "data": this.value }, "slot": `${this.slot}` };
    }
}

export default Vector;