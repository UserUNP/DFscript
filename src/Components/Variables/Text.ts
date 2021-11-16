import VariableType from "../VariableType";

class Text extends VariableType {
    constructor(value: string, slot: number) {
        super(value, slot);
    }
    compile(): { item: { id: string; data: any; }; slot: string; } {
        return { "item": { "id": "txt", "data": { "name": `${this.value}` } }, "slot": `${this.slot}` };
    }
}

export default Text;