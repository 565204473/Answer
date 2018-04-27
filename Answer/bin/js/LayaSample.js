// 程序入口
//import gameStartui=ui.GameStartUI;
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(1280, 720, true);
        //适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        //设置水平对齐
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        //设置垂直对齐
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        // Laya.loader.load([{ url: "res/atlas/comp.atlas" }], Laya.Handler.create(this, this.onloaded));
        // Laya.timer.frameOnce(1, this, this.Init);
        Render.LayerMgr.getInstance().init();
        UI.UIMgr.GetInstance().Show(UI.LOBBY_LOGIN, UI.Scope.Login);
    }
    GameMain.prototype.Init = function () {
        Render.LayerMgr.getInstance().init();
        console.log("定时调用一次");
    };
    GameMain.prototype.onloaded = function () {
        this.bgPage = new ui.GameStartUI();
        this.gamePage = new ui.GameUI();
        this.game = new Game();
        Laya.stage.addChild(this.bgPage);
        // this.Oninit(this.bgPage);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map