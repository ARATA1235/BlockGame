`use strict`;
import { View } from "./view.js";

export class MainView extends View {
    constructor(context) {
        super(context)
    }

    /* プレイヤーのキーアクションを実行する */
    executePlayerAction(key) {
        // {"Enter": true}
        /* エンターキーが押されると画面を非表示にする */
        if(key["Enter"] === true) {
            this.isVisible = false;
        }
    }

    /* 描画する */
    draw() {
        // タイトルを描画
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillStyle = "white";
        this.context.font = "24px Arial";
        this.context.fillText(
            "ブロック崩し",
            this.context.canvas.width / 2,
            this.context.canvas.height / 2
        );
        // 
        this.context.font = "16px Arial";
        this.context.fillText(
            "Press Enter",
            this.context.canvas.width / 2,
            this.context.canvas.height / 2 + 40
        );


    }
}