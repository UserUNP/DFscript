import Codeblock from "../Codeblock";
import Item from "../Item";
declare const Player: {
    action: (name: string, items?: Item[], selection?: string) => Codeblock;
};
export default Player;
