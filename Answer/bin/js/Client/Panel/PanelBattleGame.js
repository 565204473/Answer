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
    var PanelBattleGame = /** @class */ (function (_super) {
        __extends(PanelBattleGame, _super);
        function PanelBattleGame(parent, viewType) {
            var _this = _super.call(this, parent, viewType) || this;
            _this.assetArr = [{ url: "res/atlas/comp.atlas" }];
            return _this;
        }
        PanelBattleGame.prototype.OnInit = function () {
            _super.prototype.OnInit.call(this);
            Gameplay.GetInstance().InitData();
            this.InitData();
        };
        // public TryShow() {
        //     if (!this.isLoading) {
        //         this.Show();
        //     } else {
        //         if (!this.isPendingShow) {
        //             this.isPendingShow = true;
        //             Laya.loader.load(this.assetArr, Laya.Handler.create(this, this.OnLoad));
        //         }
        //     }
        // }
        PanelBattleGame.prototype.InitData = function () {
            this.panelData = Gameplay.GetInstance().GetSubData(0);
            if (this.panelData != null) {
                this.view.TxtLeft.text = this.panelData.leftNumber.toString();
                this.view.RightTxt.text = this.panelData.rightNumber.toString();
            }
        };
        PanelBattleGame.prototype.Update = function (deltaTime) {
        };
        return PanelBattleGame;
    }(UI.BasePanel));
    UI.PanelBattleGame = PanelBattleGame;
})(UI || (UI = {}));
//# sourceMappingURL=PanelBattleGame.js.map