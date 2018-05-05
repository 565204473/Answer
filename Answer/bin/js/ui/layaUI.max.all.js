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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GameUI = /** @class */ (function (_super) {
        __extends(GameUI, _super);
        function GameUI() {
            return _super.call(this) || this;
        }
        GameUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameUI.uiView);
        };
        GameUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Button", "props": { "y": 12, "x": 1233, "width": 40, "var": "BtnClose", "stateNum": 1, "skin": "comp/common009.png", "sizeGrid": "0,0,0,0", "name": "BtnClose", "height": 40 } }, { "type": "Image", "props": { "y": 465, "x": 413, "skin": "comp/image.png" } }, { "type": "Button", "props": { "y": 594, "x": 592, "width": 0, "var": "BtnAdd", "stateNum": 1, "skin": "comp/ImgAdd.png", "height": 0 } }, { "type": "Button", "props": { "y": 594, "x": 712, "var": "BtnReduction", "stateNum": 1, "skin": "comp/ImgReduction.png" } }, { "type": "Button", "props": { "y": 594, "x": 837, "var": "BtnTake", "stateNum": 1, "skin": "comp/ImgTake.png" } }, { "type": "Button", "props": { "y": 267, "x": 825, "var": "BtnEtc", "stateNum": 1, "skin": "comp/ImgETC.jpg" } }, { "type": "Image", "props": { "y": 263, "x": 435, "var": "ImgType", "skin": "comp/ImgAdd.png" } }, { "type": "Label", "props": { "y": 303, "x": 216, "width": 188, "var": "TxtLeft", "text": "1", "height": 79, "fontSize": 50, "font": "Arial", "color": "#f3e7e7" } }, { "type": "Label", "props": { "y": 304, "x": 654, "var": "RightTxt", "text": "2", "fontSize": 50, "font": "Arial", "color": "#f11713" } }, { "type": "Text", "props": { "y": 314, "x": 1051, "var": "TxtEtc", "text": "11", "fontSize": 50, "font": "Arial", "color": "#f6f6f6" } }, { "type": "Button", "props": { "y": 594, "x": 962, "var": "BtnInAdd", "stateNum": 1, "skin": "comp/ImgInAdd.png" } }] };
        return GameUI;
    }(View));
    ui.GameUI = GameUI;
})(ui || (ui = {}));
(function (ui) {
    var GameStartUI = /** @class */ (function (_super) {
        __extends(GameStartUI, _super);
        function GameStartUI() {
            return _super.call(this) || this;
        }
        GameStartUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameStartUI.uiView);
        };
        GameStartUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Panel", "props": { "y": 0, "x": 0, "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": -2, "x": -26, "width": 1280, "var": "ImgBg", "skin": "comp/GameStart.png", "pivotY": -8, "pivotX": -28, "height": 720 } }, { "type": "Button", "props": { "y": 597, "x": 1054, "width": 125, "var": "BtnStart", "stateNum": 1, "skin": "comp/common049.png", "sizeGrid": "15,0,5,0", "labelStrokeColor": "#f6110d", "labelStroke": 3, "labelSize": 30, "labelFont": "SimSun", "label": "开始", "height": 73 } }] }] };
        return GameStartUI;
    }(View));
    ui.GameStartUI = GameStartUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map