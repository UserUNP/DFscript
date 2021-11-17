import Codeblock from "../Codeblock";
import VariableType from "../VariableType";
declare const Player: {
    action: (name: string, items?: VariableType[], target?: "" | "Default" | "AllPlayers" | "Selection") => Codeblock;
    if: (condition: string, items?: VariableType[]) => Codeblock;
};
export default Player;
