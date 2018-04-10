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
    var GameStartUI = /** @class */ (function (_super) {
        __extends(GameStartUI, _super);
        function GameStartUI() {
            return _super.call(this) || this;
        }
        GameStartUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameStartUI.uiView);
        };
        GameStartUI.uiView = { "type": "View", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Panel", "props": { "width": 1280, "height": 720 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 389, "width": 500, "var": "ImgBg", "skin": "comp/71726.jpg", "height": 378 } }, { "type": "Button", "props": { "y": 308, "x": 510, "width": 243, "var": "BtnStart", "stateNum": 1, "skin": "comp/common049.png", "sizeGrid": "15,0,5,0", "label": "开始", "height": 57 } }] }] };
        return GameStartUI;
    }(View));
    ui.GameStartUI = GameStartUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map