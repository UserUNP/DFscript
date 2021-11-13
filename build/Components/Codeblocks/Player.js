"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const Player = {
    action: (name, items = [], selection = "") => {
        if (!(__1.PLAYER_ACTIONS.includes(name)))
            throw `$Player.action {name} does not exist`;
        return {
            id: "block",
            block: "player_action",
            args: { "items": items.map((item) => item.compile()) },
            action: name,
            target: selection
        };
    }
};
exports.default = Player;
//# sourceMappingURL=Player.js.map