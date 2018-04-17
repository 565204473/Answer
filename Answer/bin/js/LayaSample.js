// 程序入口
//import gameStartui=ui.GameStartUI;
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(1280, 720);
        Laya.loader.load([{ url: "res/atlas/comp.atlas" }], Laya.Handler.create(this, this.onloaded));
    }
    GameMain.prototype.onloaded = function () {
        this.bgPage = new ui.GameStartUI();
        this.gamePage = new ui.GameUI();
        this.game = new Game();
        console.log(1111);
        Laya.stage.addChild(this.bgPage);
        this.Oninit(this.bgPage);
    };
    GameMain.prototype.Oninit = function (itemdata) {
        itemdata.BtnStart.on(Laya.Event.CLICK, this, this.OnBtnStartClick);
    };
    GameMain.prototype.OnBtnStartClick = function () {
        console.log("点击了开始");
        this.game.InitGame(this.gamePage, this.bgPage);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map