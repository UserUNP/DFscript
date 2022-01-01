"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = exports.Player = exports.dfvar = exports.item = exports.vec = exports.loc = exports.num = exports.txt = exports.VarItem = exports.Item = exports.Vector = exports.Location = exports.Number = exports.Text = exports.CodeblockBuilder = exports.VariableType = exports.SOUND_TYPES = exports.POTION_TYPES = exports.IFENTITY_CONDITIONS = exports.IFPLAYER_CONDITIONS = exports.ENTITY_ACTIONS = exports.PLAYER_ACTIONS = void 0;
const tslib_1 = require("tslib");
const db_json_1 = (0, tslib_1.__importDefault)(require("./db.json"));
exports.PLAYER_ACTIONS = db_json_1.default.actions.filter(x => x.codeblockName === "PLAYER ACTION").map(x => x.name);
exports.ENTITY_ACTIONS = db_json_1.default.actions.filter(x => x.codeblockName === "ENTITY ACTION").map(x => x.name);
exports.IFPLAYER_CONDITIONS = db_json_1.default.actions.filter(x => x.codeblockName === "IF PLAYER").map(x => x.name);
exports.IFENTITY_CONDITIONS = db_json_1.default.actions.filter(x => x.codeblockName === "IF ENTITY").map(x => x.name);
exports.POTION_TYPES = db_json_1.default.potions.map(x => x.icon.name);
exports.SOUND_TYPES = db_json_1.default.sounds.map(x => x.icon.name);
const VariableType_1 = (0, tslib_1.__importDefault)(require("./Components/VariableType"));
exports.VariableType = VariableType_1.default;
const CodeblockBuilder_1 = (0, tslib_1.__importDefault)(require("./Builders/CodeblockBuilder"));
exports.CodeblockBuilder = CodeblockBuilder_1.default;
const Text_1 = (0, tslib_1.__importDefault)(require("./Components/Variables/Text"));
exports.Text = Text_1.default;
exports.txt = Text_1.default;
const Number_1 = (0, tslib_1.__importDefault)(require("./Components/Variables/Number"));
exports.Number = Number_1.default;
exports.num = Number_1.default;
const Location_1 = (0, tslib_1.__importDefault)(require("./Components/Variables/Location"));
exports.Location = Location_1.default;
exports.loc = Location_1.default;
const Vector_1 = (0, tslib_1.__importDefault)(require("./Components/Variables/Vector"));
exports.Vector = Vector_1.default;
exports.vec = Vector_1.default;
const Item_1 = (0, tslib_1.__importDefault)(require("./Components/Variables/Item"));
exports.Item = Item_1.default;
exports.item = Item_1.default;
const VarItem_1 = (0, tslib_1.__importDefault)(require("./Components/Variables/VarItem"));
exports.VarItem = VarItem_1.default;
exports.dfvar = VarItem_1.default;
const Player_1 = (0, tslib_1.__importDefault)(require("./Components/Codeblocks/Player"));
exports.Player = Player_1.default;
const pako_1 = (0, tslib_1.__importDefault)(require("pako"));
function compileIfStatement(block, json) {
    const ifstatementContent = block.dfscript__ifstatementContent;
    json.blocks.push({ "id": "bracket", "direct": "open", "type": "norm" });
    ifstatementContent.forEach((if_block) => {
        if (if_block instanceof CodeblockBuilder_1.default) {
            compileCustomCodeblock(if_block, json);
        }
        else {
            json.blocks.push(if_block);
            if (if_block.hasOwnProperty("dfscript__ifstatementContent")) {
                compileIfStatement(if_block, json);
            }
        }
    });
    json.blocks.push({ "id": "bracket", "direct": "close", "type": "norm" });
}
function compileCustomCodeblock(customblock, json) {
    customblock.codeblocks.forEach((block) => {
        if (block instanceof CodeblockBuilder_1.default) {
            compileCustomCodeblock(block, json);
        }
        else {
            json.blocks.push(block);
            if (block.hasOwnProperty("dfscript__ifstatementContent")) {
                compileIfStatement(block, json);
            }
        }
    });
}
class Template {
    name;
    codeblocks;
    json;
    constructor(name, codeblocks) {
        this.name = name;
        this.codeblocks = codeblocks;
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
            if (block instanceof CodeblockBuilder_1.default) {
                compileCustomCodeblock(block, this.json);
            }
            else {
                this.json.blocks.push(block);
                if (block.hasOwnProperty("dfscript__ifstatementContent")) {
                    compileIfStatement(block, this.json);
                }
            }
        });
        return (btoa(String.fromCharCode.apply(null, new Uint16Array(pako_1.default.gzip(JSON.stringify(this.json))))));
    }
    add(...codeblocks) {
        codeblocks.forEach(block => this.codeblocks.push(block));
    }
    remove(index) {
        this.codeblocks.splice(index, 1);
    }
}
exports.Template = Template;
//# sourceMappingURL=index.js.map