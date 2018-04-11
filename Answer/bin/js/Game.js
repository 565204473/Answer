var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.InitGame = function (itemGame, ItemOpen) {
        console.log("显示游戏面板" + itemGame.BtnClose.name);
        Laya.stage.addChild(itemGame);
        Laya.stage.removeChild(ItemOpen);
        itemGame.BtnClose.on(Laya.Event.CLICK, this, this.OnBtnCloseClick);
    };
    Game.prototype.OnBtnCloseClick = function () {
        console.log("关闭游戏");
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map