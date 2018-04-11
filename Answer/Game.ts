
class Game {

    public InitGame(itemGame: ui.GameUI, ItemOpen: ui.GameStartUI): void {
        console.log("显示游戏面板" + itemGame.BtnClose.name);
        Laya.stage.addChild(itemGame);
        Laya.stage.removeChild(ItemOpen);
        itemGame.BtnClose.on(Laya.Event.CLICK, this, this.OnBtnCloseClick);
    }

    private OnBtnCloseClick(): void {
        console.log("关闭游戏");
    }
}