import TextComponent from "../Components/TextComponent";
import Item from "./../Components/Variables/Item";

// a class that makes an item from given options and returns an Item object
export default class ItemBuilder {
	material: string;
	name: string | TextComponent;
	lore: string[] | TextComponent[];
	slot: number;

	constructor(properties: { material: string, name: string | TextComponent, lore?: string[] | TextComponent[], tags? }, slot: number) {
		this.material = properties.material;
		this.name = properties.name;
		this.lore = properties.lore;
		this.slot = slot;
	}
}
