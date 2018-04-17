// 程序入口
//import gameStartui=ui.GameStartUI;
class GameMain {
    constructor() {
        Laya.init(1280, 720);
        Laya.loader.load([{ url: "res/atlas/comp.atlas" }], Laya.Handler.create(this, this.onloaded));
    }

    public gamePage: ui.GameUI;
    private bgPage: ui.GameStartUI;
    public game: Game;
    private onloaded(): void {
        this.bgPage = new ui.GameStartUI();
        this.gamePage = new ui.GameUI();
        this.game = new Game();
        console.log(1111);
        Laya.stage.addChild(this.bgPage);
        this.Oninit(this.bgPage);
    }

    private Oninit(itemdata: ui.GameStartUI): void {
        itemdata.BtnStart.on(Laya.Event.CLICK, this, this.OnBtnStartClick);
    }

    private OnBtnStartClick(): void {
        console.log("点击了开始");
        this.game.InitGame(this.gamePage, this.bgPage);
    }
}
new GameMain();