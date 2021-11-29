import VariableType from "../VariableType";

class Item extends VariableType {
	constructor(name: string, MCitemIdName: string, slot?: number) {
		super({ name: name, MCitemIdName: MCitemIdName }, slot);
	}
	compile(): { item: { id: string; data: any; }; slot: string; } {
		return { "item": { "id": "item", "data": { "item": `{id:\"minecraft:${this.value.MCitemIdName}\",tag:{Damage:0,display:{Name:'{\"extra\":[{\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"white\",\"text\":\"${this.value.name}\"}],\"text\":\"\"}'}},Count:1b}` } }, "slot": `${this.slot}` };
	}
}

export default Item;