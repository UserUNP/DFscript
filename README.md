# DFscript
<div align="center">
  <p>Compile Javascript code to DiamondFire code templates! mcdiamondfire.com</p>
  <p>Current version: 1.0.3 beta</p>
</div>
<hr>  

<details>
  <summary>TODO:</summary>
  
  - [x] Player action, Player if codeblocks
  - [ ] Vanilla Minecraft item variables
    - [x] item name
    - [x] item material or name id _`(stone_sword, grass_block, diamond_ore, etc..)`_
    - [ ] item display name effetcs _`(color, bold, italic, etc..)`_
    - [ ] item lore
</details>

## Examples:  
<details>
  <summary>Player actions</summary>  
  
  ```javascript
  const {Template, Text, Number, Player} = require("dfscript");
  
  const example = new Template("example template", [
    Player.action("SendMessage", [new Text("Ok, ", 0), new Number(19, 1), new Text("dollar fortnite card", 2)])
  ]);
  
  console.log(example.compile());
  ```
  (or using the short aliases)
  ```javascript
  const {Template, txt, num, Player} = require("dfscript");
  
  const example = new Template("example template", [
    Player.action("SendMessage", [new txt("Ok, ", 0), new num(19, 1), new txt("dollar fortnite card", 2)])
  ]);
  
  console.log(example.compile());
  ```  
</details>
<details>
  <summary>Player if statement</summary>  
  
  ```javascript
  const {Template, Text, Player} = require("dfscript");
  
  const example = new Template("example template", [
    Player.if("IsSneaking").then(
      Player.action("SendMessage", [new Text("You sneaked", 0)]),
      Player.action("SendMessage", [new Text("Another test message", 0)])
    )
  ]);
  
  console.log(example.compile());
  ```
  (or using the short aliases)
  ```javascript
  const {Template, txt, Player} = require("dfscript");
  
  const example = new Template("example template", [
    Player.if("IsSneaking").then(
      Player.action("SendMessage", [new txt("You sneaked", 0)]),
      Player.action("SendMessage", [new txt("Another test message", 0)])
    )
  ]);
  
  console.log(example.compile());
  ```  
</details>
