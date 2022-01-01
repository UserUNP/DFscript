export declare const PLAYER_ACTIONS: string[];
export declare const ENTITY_ACTIONS: string[];
export declare const IFPLAYER_CONDITIONS: string[];
export declare const IFENTITY_CONDITIONS: string[];
export declare const POTION_TYPES: string[];
export declare const SOUND_TYPES: string[];
import VariableType from "./Components/VariableType";
import Codeblock from "./Components/Codeblock";
import CodeblockBuilder from "./Builders/CodeblockBuilder";
export { VariableType, Codeblock, CodeblockBuilder };
import Text from "./Components/Variables/Text";
import Number from "./Components/Variables/Number";
import Location from "./Components/Variables/Location";
import Vector from "./Components/Variables/Vector";
import Item from "./Components/Variables/Item";
import VarItem from "./Components/Variables/VarItem";
export { Text, Number, Location, Vector, Item, VarItem };
export { Text as txt, Number as num, Location as loc, Vector as vec, Item as item, VarItem as dfvar };
import Player from "./Components/Codeblocks/Player";
export { Player };
export declare class Template {
    name: string;
    codeblocks: Codeblock[] | CodeblockBuilder[];
    json: {
        blocks: any;
    };
    constructor(name: string, codeblocks: Codeblock[] | CodeblockBuilder[]);
    compile(): string;
    add(...codeblocks: Codeblock[] | CodeblockBuilder[]): void;
    remove(index: number): void;
}
