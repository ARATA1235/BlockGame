`use strict`;
import { BlocksGame } from "./blocks.js";

const game = new BlocksGame("canvas");

document.addEventListener("keydown", (event)=> {
    game.setKeydownKey(event.key);
});

document.addEventListener("keyup", (event)=> {
    game.setKeyupKey(event.key);
});
