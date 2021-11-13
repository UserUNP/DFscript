import Item from "../Item";

class Text extends Item {
    constructor(value, slot:number) {
        super(value, slot);
    }
    compile(): { item: { id: string; data: any; }; slot: string; } {
        return {"item": {"id":"txt", "data":{"name":`${this.value}`}}, "slot": `${this.slot}`};
    }
}

export default Text;