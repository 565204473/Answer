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
    var PanelEventExample = /** @class */ (function (_super) {
        __extends(PanelEventExample, _super);
        function PanelEventExample(parent, viewType) {
            return _super.call(this, parent, viewType) || this;
        }
        PanelEventExample.prototype.Update = function (deltaTime) {
        };
        PanelEventExample.prototype.OnShow = function () {
            EventSystem.EventMgr.getInstance().eventDispatcher.addEventListener(EventSystem.LOGIN_OFFICIALREGIST, this.OnTestCallback, this);
        };
        PanelEventExample.prototype.OnHide = function () {
            EventSystem.EventMgr.getInstance().eventDispatcher.removeEventListener(EventSystem.LOGIN_OFFICIALREGIST, this.OnTestCallback, this);
        };
        PanelEventExample.prototype.OnTestCallback = function (event) {
            console.log("事件系统");
        };
        return PanelEventExample;
    }(UI.BasePanel));
    UI.PanelEventExample = PanelEventExample;
})(UI || (UI = {}));
//# sourceMappingURL=PanelEventExample.js.map