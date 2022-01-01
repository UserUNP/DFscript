export default interface TextComponent {
    text: string;
    color?: "dark_red" | "red" | "gold" | "yellow" | "dark_green" | "green" | "aqua" | "dark_aqua" | "dark_blue" | "blue" | "light_purple" | "dark_putple" | "white" | "gray" | "dark_gray" | "black" | number;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    obfuscated?: boolean;
}
export declare function toTextComponent(text: string): TextComponent | TextComponent[];
