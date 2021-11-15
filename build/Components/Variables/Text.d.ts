import Item from "../Item";
declare class Text extends Item {
    constructor(value: string, slot: number);
    compile(): {
        item: {
            id: string;
            data: any;
        };
        slot: string;
    };
}
export default Text;
