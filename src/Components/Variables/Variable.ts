import VariableType from "../VariableType";

class Variable extends VariableType {
	constructor(name: string, scope: "saved" | "game" | "local" | "unsaved", slot: number) {
		if(scope == "game") scope = "unsaved";
		super({ name: name, scope: scope }, slot);
	}
	compile(): { item: { id: string; data: any; }; slot: string; } {
		return { "item": { "id": "var", "data": { "name": `${this.value.name}`, "scope": `${this.value.scope}` } }, "slot": `${this.slot}` };
	}
}

export default Variable;