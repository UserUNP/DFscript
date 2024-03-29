"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const Player = {
    action: (name, items = [], target = "") => {
        if (!(__1.PLAYER_ACTIONS.includes(name)))
            throw new Error(`Player.action ${name} does not exist`);
        return {
            id: "block",
            block: "player_action",
            args: { "items": items.map((item) => item.compile()) },
            action: name,
            target: target
        };
    },
    if: (condition, items = []) => {
        if (!(__1.IFPLAYER_CONDITIONS.includes(condition)))
            throw new Error(`Player.if ${condition} does not exist`);
        return {
            id: "block",
            block: "if_player",
            args: { "items": items.map((item) => item.compile()) },
            action: condition,
            then: (codeblocks) => {
                return {
                    id: "block",
                    block: "if_player",
                    args: { "items": items.map((item) => item.compile()) },
                    action: condition,
                    dfscript__ifstatementContent: codeblocks
                };
            }
        };
    }
};
exports.default = Player;
//# sourceMappingURL=Player.js.map