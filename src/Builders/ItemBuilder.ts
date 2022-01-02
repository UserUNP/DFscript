import TextComponent from "../Components/TextComponent";
import Item from "./../Components/Variables/Item";

// a class that makes an item from given options and returns an Item object
export default class ItemBuilder {
	material: string;
	name: string | TextComponent;
	lore: string[] | TextComponent[];

	constructor(properties: { material: string, name: string | TextComponent, lore?: string[] | TextComponent[], tags? }, public slot: number) {
		this.material = properties.material;
		this.name = properties.name;
		this.lore = properties.lore;
	}

	compile() {
		const nameProperties = this.name instanceof TextComponent ? `\"bold\":${this.name.bold},\"italic\":${this.name.italic},\"underlined\":${this.name.underline},\"strikethrough\":${this.name.strikethrough},\"obfuscated\":${this.name.obfuscated},\"color\":\"${this.name.color}\",\"text\":\"${this.name}\"` : "\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"white\",\"text\":\"${this.name}\"";
		
		
		return { "item": { "id": "item", "data": { "item": `{id:\"minecraft:${this.material}\",tag:{Damage:0,display:{Name:'{\"extra\":[{${nameProperties}}],\"text\":\"\"}'}},Count:1b}` } }, "slot": `${this.slot}` };
	}
}
