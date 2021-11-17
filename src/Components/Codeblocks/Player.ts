import { PLAYER_ACTIONS, IFPLAYER_CONDITIONS } from "../..";
import Codeblock from "../Codeblock"
import VariableType from "../VariableType"

const Player = {
	/**
	 * Do a player action
	 * @param name Player action name
	 * @param items Items in the parameter chest (optional)
	 * @param selection Target Selection (optional)
	 * @returns {Codeblock} The JSON format
	 */
	action: (name: string, items: VariableType[] = [], target: "" | "Default" | "AllPlayers" | "Selection" = ""): Codeblock => {
		if (!(PLAYER_ACTIONS.includes(name))) throw `Player.action ${name} does not exist`;
		return {
			id: "block",
			block: "player_action",
			args: { "items": items.map((item) => item.compile()) },
			action: name,
			target: target
		}
	},
	/**
	 * Player if statement
	 * @param condition If player condition name
	 * @param items Items in the parameter chest (optional)
	 * @returns {Codeblock} The JSON format
	 */
	if: (condition: string, items: VariableType[] = []): Codeblock => {
		if (!(IFPLAYER_CONDITIONS.includes(condition))) throw `Player.if ${condition} does not exist`;
		return {
			id: "block",
			block: "if_player",
			args: { "items": items.map((item) => item.compile()) },
			action: condition,
			then: (...codeblocks: Codeblock[]): Codeblock => {
				return {
					id: "block",
					block: "if_player",
					args: { "items": items.map((item) => item.compile()) },
					action: condition,
					dfscript__ifstatementContent: codeblocks
				}
			}
		}
	}
};
export default Player;