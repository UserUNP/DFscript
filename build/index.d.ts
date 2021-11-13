export declare const PLAYER_ACTIONS: string[];
export declare const ENTITY_ACTIONS: string[];
export declare const IFPLAYER_CONDITIONS: string[];
export declare const IFENTITY_CONDITIONS: string[];
import Item from "./Components/Item";
import Codeblock from "./Components/Codeblock";
export declare type item = Item;
export declare type codeblock = Codeblock;
import Text from "./Components/Variables/Text";
import Player from "./Components/Codeblocks/Player";
export { Text, Player };
export default class Template {
    name: string;
    codeblocks: Codeblock[];
    creator?: string;
    private sendToCodeutils;
    json: {
        blocks: any;
    };
    constructor(name: string, codeblocks: Codeblock[], creator?: string, sendToCodeutils?: boolean);
    compile(): string;
}
