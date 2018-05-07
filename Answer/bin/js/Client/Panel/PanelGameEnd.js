var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UI;
(function (UI) {
    var PanelGameEnd = /** @class */ (function (_super) {
        __extends(PanelGameEnd, _super);
        function PanelGameEnd(parent, viewType) {
            var _this = _super.call(this, parent, viewType) || this;
            _this.assetArr = [{ url: "res/atlas/comp.atlas" }];
            return _this;
        }
        PanelGameEnd.prototype.Update = function (deltaTime) {
        };
        PanelGameEnd.prototype.OnInit = function () {
            _super.prototype.OnInit.call(this);
            this.view.BtnOpenGame.on(Laya.Event.CLICK, this, this.OnOpenNewGame);
        };
        PanelGameEnd.prototype.OnShow = function () {
            _super.prototype.OnShow.call(this);
        };
        PanelGameEnd.prototype.OnOpenNewGame = function () {
            UI.UIMgr.GetInstance().Hide(UI.LOBBY_BATTLE_END);
            UI.UIMgr.GetInstance().Show(UI.LOBBY_GAME, UI.Scope.Battle);
        };
        return PanelGameEnd;
    }(UI.BasePanel));
    UI.PanelGameEnd = PanelGameEnd;
})(UI || (UI = {}));
//# sourceMappingURL=PanelGameEnd.js.map