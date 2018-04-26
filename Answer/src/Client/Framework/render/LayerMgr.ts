namespace Render {
    export class LayerMgr {
        private layerScene: Laya.Sprite;
        private layerHUD: Laya.Component;
        private layerUI: Laya.Component;

        public init() {
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

        }

        public GetSceneNode(): Laya.Sprite {
            return this.layerScene;
        }

        public GetHUDNode():Laya.Component{
            return this.layerHUD;
        }

        public GetUINode():Laya.Component{
            return this.layerUI;
        }

        
        // 单例模式
        private static _instance:LayerMgr;
        public static getInstance() {
            LayerMgr._instance = LayerMgr._instance || new LayerMgr();
            return LayerMgr._instance;
        }
    }


}
