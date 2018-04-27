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
    var PanelLobbyLogin = /** @class */ (function (_super) {
        __extends(PanelLobbyLogin, _super);
        function PanelLobbyLogin(parent, viewType) {
            var _this = _super.call(this, parent, viewType) || this;
            _this.assetArr = [
                { url: "res/atlas/comp.atlas" }
            ];
            return _this;
        }
        PanelLobbyLogin.prototype.OnInit = function () {
            _super.prototype.OnInit.call(this);
            this.view.BtnStart.on(Laya.Event.CLICK, this, this.OnBtnStartClick);
        };
        PanelLobbyLogin.prototype.TryShow = function () {
            if (!this.isLoading) {
                this.Show();
            }
            else {
                if (!this.isPendingShow) {
                    this.isPendingShow = true;
                    Laya.loader.load(this.assetArr, Laya.Handler.create(this, this.OnLoad));
                }
            }
        };
        PanelLobbyLogin.prototype.Update = function (deltaTime) {
        };
        PanelLobbyLogin.prototype.OnBtnStartClick = function () {
            console.log("开始游戏");
            // UI.UIMgr.GetInstance().Hide(UI.LOBBY_LOGIN);
            UI.UIMgr.GetInstance().Show(UI.LOBBY_GAME, UI.Scope.Battle);
        };
        return PanelLobbyLogin;
    }(UI.BasePanel));
    UI.PanelLobbyLogin = PanelLobbyLogin;
})(UI || (UI = {}));
//# sourceMappingURL=PanelLobbyLogin.js.map