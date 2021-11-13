export default abstract class Item {

    public value;
    public slot:number;
    /**
     * Create a new item variable
     * @param value The value
     * @param slot Slot number on the parameter chest (begins from 0)
     */
    constructor(value, slot:number) {
        this.value = value;
        this.slot = slot;
    }

    /**
     * Compile the item variable to JSON
     * @returns The JSON format
     */
    abstract compile():{"item":{"id":string, "data":any}, "slot":string}
}