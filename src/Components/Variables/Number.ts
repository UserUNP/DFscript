import Item from "../Item";

class Number extends Item {
    constructor(value:number, slot:number) {
        super(value, slot);
    }
    compile(): { item: { id: string; data: any; }; slot: string; } {
        return {"item": {"id":"num", "data":{"name":`${this.value}`}}, "slot": `${this.slot}`};
    }
}

export default Number;