import db from "./db.json";

export const PLAYER_ACTIONS: string[] = db.actions.filter(x => x.codeblockName === "PLAYER ACTION").map(x => x.name);
export const ENTITY_ACTIONS: string[] = db.actions.filter(x => x.codeblockName === "ENTITY ACTION").map(x => x.name);
export const IFPLAYER_CONDITIONS: string[] = db.actions.filter(x => x.codeblockName === "IF PLAYER").map(x => x.name);
export const IFENTITY_CONDITIONS: string[] = db.actions.filter(x => x.codeblockName === "IF ENTITY").map(x => x.name);

export const POTION_TYPES = db.potions.map(x => x.icon.name);
export const SOUND_TYPES = db.sounds.map(x => x.icon.name)

import VariableType from "./Components/VariableType"; export {VariableType}
import Codeblock from "./Components/Codeblock"; export {Codeblock}
import PackedBlock from "./Builders/PackedBlock"; export {PackedBlock}
import ItemBuilder from "./Components/Builders/ItemBuilder"; export {ItemBuilder};

import Text from "./Components/Variables/Text"; export {Text};
import Number from "./Components/Variables/Number"; export {Number};
import Location from "./Components/Variables/Location"; export {Location};
import Vector from "./Components/Variables/Vector"; export {Vector};
import Item from "./Components/Variables/Item"; export {Item};
import Variable from "./Components/Variables/Variable"; export {Variable};

import Player from "./Components/Codeblocks/Player";
export { Player }

import pako from "pako";

function compileIfStatement(block: Codeblock, json) {
	const ifstatementContent = block.dfscript__ifstatementContent;
	json.blocks.push({ "id": "bracket", "direct": "open", "type": "norm" });
	ifstatementContent.forEach((if_block) => {
		if (if_block instanceof PackedBlock) {
			compileCustomCodeblock(if_block, json)
		}else {
			json.blocks.push(if_block);
			if (if_block.hasOwnProperty("dfscript__ifstatementContent")) {
				compileIfStatement(if_block, json);
			}
		}
	});
	json.blocks.push({ "id": "bracket", "direct": "close", "type": "norm" });
}

function compileCustomCodeblock(customblock: PackedBlock, json) {
	customblock.codeblocks.forEach((block) => {
		if (block instanceof PackedBlock) {
			compileCustomCodeblock(<PackedBlock> block, json)
		}else {
			json.blocks.push(block);
			if (block.hasOwnProperty("dfscript__ifstatementContent")) {
				compileIfStatement(block, json);
			}
		}
	})
}

export class Template {
	json: { blocks: any; };
	constructor(public name: string, public codeblocks: Codeblock[] | PackedBlock[]) {
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

	public compile(): string {
		this.codeblocks.forEach((block) => {
			if (block instanceof PackedBlock) {
				compileCustomCodeblock(block, this.json)
			}else {
				this.json.blocks.push(block);
				if (block.hasOwnProperty("dfscript__ifstatementContent")) {
					compileIfStatement(block, this.json);
				}
			}
		});
		return (btoa(String.fromCharCode.apply(null, new Uint16Array(pako.gzip(JSON.stringify(this.json))))));
	}

	public add(...codeblocks: Codeblock[] | PackedBlock[]): void {
		codeblocks.forEach(block => this.codeblocks.push(block));
	}

	public remove(index: number): void {
		this.codeblocks.splice(index, 1);
	}
}
