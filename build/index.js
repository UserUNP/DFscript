"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = exports.Player = exports.loc = exports.num = exports.txt = exports.Location = exports.Number = exports.Text = exports.IFENTITY_CONDITIONS = exports.IFPLAYER_CONDITIONS = exports.ENTITY_ACTIONS = exports.PLAYER_ACTIONS = void 0;
const tslib_1 = require("tslib");
const db_json_1 = (0, tslib_1.__importDefault)(require("./db.json"));
exports.PLAYER_ACTIONS = db_json_1.default.actions.filter(x => x.codeblockName === "PLAYER ACTION").map(x => x.name);
exports.ENTITY_ACTIONS = db_json_1.default.actions.filter(x => x.codeblockName === "ENTITY ACTION").map(x => x.name);
exports.IFPLAYER_CONDITIONS = db_json_1.default.actions.filter(x => x.codeblockName === "IF PLAYER").map(x => x.name);
exports.IFENTITY_CONDITIONS = db_json_1.default.actions.filter(x => x.codeblockName === "IF ENTITY").map(x => x.name);
const Text_1 = (0, tslib_1.__importDefault)(require("./Components/Variables/Text"));
exports.Text = Text_1.default;
exports.txt = Text_1.default;
const Number_1 = (0, tslib_1.__importDefault)(require("./Components/Variables/Number"));
exports.Number = Number_1.default;
exports.num = Number_1.default;
const Location_1 = (0, tslib_1.__importDefault)(require("./Components/Variables/Location"));
exports.Location = Location_1.default;
exports.loc = Location_1.default;
const Player_1 = (0, tslib_1.__importDefault)(require("./Components/Codeblocks/Player"));
exports.Player = Player_1.default;
const pako_1 = (0, tslib_1.__importDefault)(require("pako"));
class Template {
    name;
    codeblocks;
    creator;
    sendToCodeutils;
    json;
    constructor(name, codeblocks, creator, sendToCodeutils = false) {
        this.name = name;
        this.codeblocks = codeblocks;
        this.creator = creator;
        this.sendToCodeutils = sendToCodeutils;
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
    compile() {
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
            }
            else {
                this.json.blocks.push(block);
            }
        });
        return (btoa(String.fromCharCode.apply(null, new Uint16Array(pako_1.default.gzip(JSON.stringify(this.json))))));
    }
}
exports.Template = Template;
//# sourceMappingURL=index.js.map