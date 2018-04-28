// 程序入口
//import gameStartui=ui.GameStartUI;
class GameMain {
    constructor() {
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

    public gamePage: ui.GameUI;
    private bgPage: ui.GameStartUI;
    public game: Game;
    private onloaded(): void {
        this.bgPage = new ui.GameStartUI();
        this.gamePage = new ui.GameUI();
        this.game = new Game();
        Laya.stage.addChild(this.bgPage);
    }

    // private Oninit(itemdata: ui.GameStartUI): void {
    //     itemdata.BtnStart.on(Laya.Event.CLICK, this, this.OnBtnStartClick);
    // }

    // private OnBtnStartClick(): void {
    //     this.game.InitGame(this.gamePage, this.bgPage);
    // }
}
new GameMain();