import VariableType from "../VariableType";
import TextComponent, { toTextComponent, convertHex } from "../TextComponent";

class Item extends VariableType {
	constructor(text: string | TextComponent, MCitemIdName: string, slot: number) {
		if (typeof text === "string") super(toTextComponent(text), slot);
		else {
			text["MCitemIdName"] = MCitemIdName;
			if(text["strikethrough"] == null) text["strikethrough"] = false;
			if(text["obfuscated"] == null) text["obfuscated"] = false;
			if(text["underline"] == null) text["underline"] = false;
			if(text["italic"] == null) text["italic"] = false;
			if(text["bold"] == null) text["bold"] = false;
			if(text["color"] == null) text["color"] = "white";
			else if(typeof text["color"] == "number") text["color"] = convertHex(text["color"]);
			
			super(text, slot);
		}
	}
	compile(): { item: { id: string; data: any; }; slot: string; } {
		return { "item": { "id": "item", "data": { "item": `{id:\"minecraft:${this.value.MCitemIdName}\",tag:{Damage:0,display:{Name:'{\"extra\":[{\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"white\",\"text\":\"${this.value.text}\"}],\"text\":\"\"}'}},Count:1b}` } }, "slot": `${this.slot}` };
	}
}

export default Item;