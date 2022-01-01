type color = "dark_red" | "red" | "gold" | "yellow" | "dark_green" | "green" | "aqua" | "dark_aqua" | "dark_blue" | "blue" | "light_purple" | "dark_putple" | "white" | "gray" | "dark_gray" | "black";

export default interface TextComponent {
	text: string,
	color?: color | number,
	bold?: boolean,
	italic?: boolean,
	underline?: boolean,
	strikethrough?: boolean,
	obfuscated?: boolean
}

const CODES = {
	COLORS: {
		"a": "green",
		"b": "aqua",
		"c": "red",
		"d": "light_purple",
		"e": "yellow",
		"f": "white",
		"1": "dark_blue",
		"2": "dark_green",
		"3": "dark_aqua",
		"4": "dark_red",
		"5": "dark_purple",
		"6": "gold",
		"7": "gray",
		"8": "dark_gray",
		"9": "blue",
		"0": "black"
	},
	FORMATS: {
		"k": "obfuscated",
		"l": "bold",
		"m": "strikethrough",
		"n": "underline",
		"o": "italic",
		"r": "reset"
	}
}

// turn normal text into a text component
export function toTextComponent(text: string): TextComponent {
	let color: color = "white";
	let bold = false;
	let italic = false;
	let underline = false;
	let strikethrough = false;
	let obfuscated = false;
	let newText = "";

	for (let i = 0; i < text.length; i++) {
		let char = text[i];
		if (char === "§") {
			if (i + 1 < text.length) {
				let nextChar = text[i + 1];
				if (nextChar in CODES.COLORS) {
					color = CODES.COLORS[nextChar];
					i++;
				} else if (nextChar in CODES.FORMATS) {
					if (CODES.FORMATS[nextChar] === "reset") {
						color = "white";
						bold = false;
						italic = false;
						underline = false;
						strikethrough = false;
						obfuscated = false;
					} else {
						CODES.FORMATS[nextChar] = true;
					}
					i++
				}
			}
		} else {
			newText += char
		}
	}

	return {
		text: newText,
		color: color,
		bold: bold,
		italic: italic,
		underline: underline,
		strikethrough: strikethrough,
		obfuscated: obfuscated
	}
}

export function convertHex(num) {
	var hex = num.toString(16);
	if (hex.length < 6 || hex.length > 6) {
		throw new Error(`invalid hex color! can't have a hex color ${hex.length < 6 ? "less" : "more"} than 6 characters!`);
	}
	try {
		hex = parseInt(hex);
	} catch(err) {
		throw new Error("invalid hex color!");
	}
	return hex;
}