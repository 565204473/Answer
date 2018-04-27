var UI;
(function (UI) {
    var BasePanel = /** @class */ (function () {
        function BasePanel(parent, viewType) {
            this.isLoading = true;
            this.isPendingShow = false;
            this.assetArr = new Array();
            this.parent = parent;
            this.viewType = viewType;
        }
        BasePanel.prototype.OnInit = function () {
            this.view = new this.viewType();
            this.view.visible = false;
            this.view.zOrder = 0;
            this.parent.addChild(this.view);
        };
        BasePanel.prototype.OnLoad = function () {
            if (this.isPendingShow) {
                this.isLoading = false;
                this.isPendingShow = false;
                this.OnInit();
                this.OnShow();
            }
        };
        BasePanel.prototype.OnShow = function () {
            this.view.visible = true;
            this.view.zOrder = this.viewOrder;
        };
        BasePanel.prototype.OnHide = function () {
            this.view.visible = false;
            this.view.zOrder = 0;
        };
        BasePanel.prototype.OnDestory = function () {
        };
        BasePanel.prototype.TryShow = function () {
            this.viewOrder = UI.UIMgr.GetInstance().GetNextZOrder();
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
        BasePanel.prototype.Show = function () {
            if (!this.view.visible) {
                this.OnShow();
            }
        };
        BasePanel.prototype.Hide = function () {
            if (this.view.visible) {
                this.OnHide();
            }
        };
        BasePanel.prototype.Destory = function () {
            this.OnDestory();
        };
        BasePanel.prototype.IsLoading = function () {
            return this.isLoading;
        };
        BasePanel.prototype.IsVisible = function () {
            if (this.view == null) {
                return false;
            }
            return this.view.visible;
        };
        BasePanel.prototype.BringToTop = function () {
            this.viewOrder = UI.UIMgr.GetInstance().GetNextZOrder();
            this.view.zOrder = this.viewOrder;
        };
        return BasePanel;
    }());
    UI.BasePanel = BasePanel;
})(UI || (UI = {}));
//# sourceMappingURL=BasePanel.js.map