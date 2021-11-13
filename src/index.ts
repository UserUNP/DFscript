import db from "./db.json";

export const PLAYER_ACTIONS = db.actions.filter(x => x.codeblockName === "PLAYER ACTION").map(x => x.name);
export const ENTITY_ACTIONS = db.actions.filter(x => x.codeblockName === "ENTITY ACTION").map(x => x.name);
export const IFPLAYER_CONDITIONS = db.actions.filter(x => x.codeblockName === "IF PLAYER").map(x => x.name);
export const IFENTITY_CONDITIONS = db.actions.filter(x => x.codeblockName === "IF ENTITY").map(x => x.name);

import Item from "./Components/Item";
import Codeblock from "./Components/Codeblock";
export type item = Item;
export type codeblock = Codeblock;

import Text from "./Components/Variables/Text";
import Player from "./Components/Codeblocks/Player";
export {Text, Player}

import pako from "pako";

export default class Template {
	json: { blocks: any; };
	constructor(public name: string, public codeblocks: Codeblock[], public creator?: string, private sendToCodeutils: boolean = false) {
		if (sendToCodeutils == undefined) sendToCodeutils = false;
		this.json = {
			"blocks": [
				{
					"id": "block",
					"block": "func",
					"args": {
						"items": [{
							"item": { "id": "bl_tag", "data": { "option": "False", "tag": "Is Hidden", "action": "dynamic", "block": "func" } },
							"slot": 26
						}]
					},
					"data": `${name}`
				}
			]
		};
	}

	public compile() {
		this.codeblocks.forEach((block) => {
			if (block.hasOwnProperty("dfjs__ifstatementContent")) {
				const ifstatementContnet = block.dfjs__ifstatementContent;
				delete block.dfjs__ifstatementContent;
				this.json.blocks.push(block);
				this.json.blocks.push({ "id": "bracket", "direct": "open", "type": "norm" });
				ifstatementContnet.forEach((if_block) => {
					this.json.blocks.push(if_block);
				});
				this.json.blocks.push({ "id": "bracket", "direct": "close", "type": "norm" });
			} else {
				this.json.blocks.push(block);
			}
		})
		return (btoa(String.fromCharCode.apply(null, new Uint16Array(pako.gzip(JSON.stringify(this.json))))));
	}
}
