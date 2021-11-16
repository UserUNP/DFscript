import Codeblock from "../Codeblock";
import VariableType from "../VariableType";
declare const Player: {
    action: (name: string, items?: VariableType[], selection?: string) => Codeblock;
    if: (condition: string, items?: VariableType[]) => Codeblock;
};
export default Player;
