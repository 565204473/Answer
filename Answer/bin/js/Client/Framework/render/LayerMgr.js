var Render;
(function (Render) {
    var LayerMgr = /** @class */ (function () {
        function LayerMgr() {
        }
        LayerMgr.prototype.init = function () {
            this.layerScene = new Laya.Sprite();
            this.layerHUD = new Laya.Component();
            this.layerHUD.top = 0;
            this.layerHUD.bottom = 0;
            this.layerHUD.left = 0;
            this.layerHUD.right = 0;
            this.layerUI = new Laya.Component();
            this.layerUI.top = 0;
            this.layerUI.bottom = 0;
            this.layerUI.left = 0;
            this.layerUI.right = 0;
            Laya.stage.addChild(this.layerScene);
            Laya.stage.addChild(this.layerHUD);
            Laya.stage.addChild(this.layerUI);
        };
        LayerMgr.prototype.GetSceneNode = function () {
            return this.layerScene;
        };
        LayerMgr.prototype.GetHUDNode = function () {
            return this.layerHUD;
        };
        LayerMgr.prototype.GetUINode = function () {
            console.log("&&&" + this.layerUI);
            return this.layerUI;
        };
        LayerMgr.getInstance = function () {
            LayerMgr._instance = LayerMgr._instance || new LayerMgr();
            return LayerMgr._instance;
        };
        return LayerMgr;
    }());
    Render.LayerMgr = LayerMgr;
})(Render || (Render = {}));
//# sourceMappingURL=LayerMgr.js.map