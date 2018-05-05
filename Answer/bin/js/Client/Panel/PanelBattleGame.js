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
            this.index = 0;
            this.view.BtnAdd.on(Laya.Event.CLICK, this, this.OnBtnAddClick);
            this.view.BtnReduction.on(Laya.Event.CLICK, this, this.OnBtnMinusClick);
            this.view.BtnTake.on(Laya.Event.CLICK, this, this.OnBtnRideClick);
            this.view.BtnInAdd.on(Laya.Event.CLICK, this, this.OnBtnInAddClick);
            this.InitData();
        };
        PanelBattleGame.prototype.Update = function (deltaTime) {
        };
        PanelBattleGame.prototype.InitData = function () {
            this.OnRefreshViewData(SubtractingType.None, this.index);
        };
        PanelBattleGame.prototype.OnRefreshViewData = function (type, index) {
            this.panelData = Gameplay.GetInstance().GetSubData(index);
            var spriptImg = new Laya.Sprite();
            if (this.panelData != null) {
                this.view.TxtLeft.text = this.panelData.leftNumber.toString();
                this.view.RightTxt.text = this.panelData.rightNumber.toString();
                this.view.TxtEtc.text = this.panelData.countNumber.toString();
                if (type == this.panelData.type) {
                    console.log("正确");
                    this.OnRefreshView(SubtractingType.None, this.index += 1);
                }
                else {
                    console.log("错误");
                }
            }
        };
        PanelBattleGame.prototype.OnRefreshView = function (type, index) {
            this.view.ImgType.skin = SubtracingTypeHelp.GetSubtracingType(type);
            this.OnRefreshViewData(type, index);
        };
        PanelBattleGame.prototype.OnBtnAddClick = function () {
            this.OnRefreshView(SubtractingType.Add, this.index);
        };
        PanelBattleGame.prototype.OnBtnMinusClick = function () {
            this.OnRefreshView(SubtractingType.Minus, this.index);
        };
        PanelBattleGame.prototype.OnBtnRideClick = function () {
            this.OnRefreshView(SubtractingType.ride, this.index);
        };
        PanelBattleGame.prototype.OnBtnInAddClick = function () {
            this.OnRefreshView(SubtractingType.InAdd, this.index);
        };
        return PanelBattleGame;
    }(UI.BasePanel));
    UI.PanelBattleGame = PanelBattleGame;
})(UI || (UI = {}));
//# sourceMappingURL=PanelBattleGame.js.map