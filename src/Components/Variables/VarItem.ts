import VariableType from "../VariableType";

class VarItem extends VariableType {
	constructor(name: string, scope: string, slot: number) {
		super({ name: name, scope: scope }, slot);
	}
	compile(): { item: { id: string; data: any; }; slot: string; } {
		return { "item": { "id": "var", "data": { "name": `${this.value.name}`, "scope": `${this.value.scope}` } }, "slot": `${this.slot}` };
	}
}

export default VarItem;