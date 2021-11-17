const {Template, txt, Player, CodeblockBuilder, num} = require("..");

const test = new CodeblockBuilder({name: "test block", action: "does something"}, [
	Player.action("SendMessage", [new txt("epic custom block!!!", 0)]),
	Player.action("Damage", [new num(20, 0)]),
	Player.action("SendMessage", [new txt("get damaged noob :sunglasses:", 0)])
])

const a = new Template("example template", [
  Player.if("IsSneaking").then(
	  Player.action("SendMessage", [new txt("You sneaked", 0)]),
	  Player.action("SendMessage", [new txt("Another test message", 0)]),
	  test
	)
]);

const aa = new Template("example template", [
	test
]);



console.log(a.compile());

console.log(a.codeblocks[0].dfscript__ifstatementContent)