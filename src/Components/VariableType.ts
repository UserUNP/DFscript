export default abstract class VariableType {

    public value: any;
    public slot: number;
    /**
     * Create a new item variable
     * @constructor
     * @param value The value
     * @param slot Slot number on the parameter chest (begins from 0)
     */
    constructor(value: any, slot: number) {
        this.value = value;
        this.slot = slot;
    }

    /**
     * Compile the item variable to JSON
     * @returns The JSON format
     */
    abstract compile(): { "item": { "id": string, "data": any }, "slot": string }
}