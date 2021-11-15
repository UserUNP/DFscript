import { PLAYER_ACTIONS } from "../..";
import Codeblock from "../Codeblock"
import Item from "../Item"

const Player = {
	/**
	 * Do a player action
	 * @param name Player action name
	 * @param items Items in the parameter chest (optional)
	 * @param selection Target Selection (optional)
	 * @returns {Codeblock} The JSON format
	 */
	action: (name:string, items: Item[] = [], selection: string = ""): Codeblock => {
		if(!(PLAYER_ACTIONS.includes(name))) throw `Player.action ${name} does not exist`
		return  {
			id: "block",
			block: "player_action",
			args: { "items": items.map((item) => item.compile()) },
			action: name,
			target: selection
		}
	}
};
export default Player;