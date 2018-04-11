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
        GameUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "width": 1280, "skin": "comp/1.jpg", "height": 720 } }, { "type": "Button", "props": { "y": 607, "x": 1173, "width": 40, "var": "BtnClose", "skin": "comp/common009.png", "sizeGrid": "0,0,0,0", "height": 40 } }, { "type": "Text", "props": { "y": 64, "x": 458, "width": 400, "text": "我是游戏主场景", "height": 50, "fontSize": 40, "color": "#ffffff" } }] };
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
        GameStartUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Panel", "props": { "y": 0, "x": 0, "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": -2, "x": -26, "width": 1280, "var": "ImgBg", "skin": "comp/71726.jpg", "pivotY": -8, "pivotX": -28, "height": 720 } }, { "type": "Button", "props": { "y": 621, "x": 520, "width": 243, "var": "BtnStart", "stateNum": 1, "skin": "comp/common049.png", "sizeGrid": "15,0,5,0", "label": "开始", "height": 57 } }] }] };
        return GameStartUI;
    }(View));
    ui.GameStartUI = GameStartUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map