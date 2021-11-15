import Item from "../Item";

interface Location {
	x: number
	y: number
	z: number
	pitch?: number
	yaw?: number
}

class Location extends Item {
    constructor(value:Location, slot:number) {
        super(value, slot);
    }
    compile(): { item: { id: string; data: any; }; slot: string; } {
        return {"item": {"id":"loc", "data":{"loc":this.value}}, "slot": `${this.slot}`};
    }
}

export default Location;