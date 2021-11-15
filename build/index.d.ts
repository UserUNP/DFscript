export declare const PLAYER_ACTIONS: string[];
export declare const ENTITY_ACTIONS: string[];
export declare const IFPLAYER_CONDITIONS: string[];
export declare const IFENTITY_CONDITIONS: string[];
import Item from "./Components/Item";
import Codeblock from "./Components/Codeblock";
export declare type item = Item;
export declare type codeblock = Codeblock;
import Text from "./Components/Variables/Text";
import Number from "./Components/Variables/Number";
import Location from "./Components/Variables/Location";
export { Text, Number, Location };
export { Text as txt, Number as num, Location as loc };
import Player from "./Components/Codeblocks/Player";
export { Player };
export declare class Template {
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
