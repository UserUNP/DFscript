import Item from "../Item";
interface Location {
    x: number;
    y: number;
    z: number;
    pitch?: number;
    yaw?: number;
}
declare class Location extends Item {
    constructor(value: Location, slot: number);
    compile(): {
        item: {
            id: string;
            data: any;
        };
        slot: string;
    };
}
export default Location;
