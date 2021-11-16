const {Template, Player, txt,dfvar} = require("..")

const test = new Template("test template", [
	Player.if("IsSneaking").then(
		Player.action("SendMessage", [new txt("you sneaked", 0), new dfvar("test var", "unsaved", 1)])
	)
])

console.log(test.compile());

