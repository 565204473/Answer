
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {
		public BtnClose:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Button","props":{"y":607,"x":1173,"width":40,"var":"BtnClose","stateNum":1,"skin":"comp/common009.png","sizeGrid":"0,0,0,0","name":"BtnClose","height":40}},{"type":"Text","props":{"y":64,"x":458,"width":400,"text":"我是游戏主场景","height":50,"fontSize":40,"color":"#ffffff"}},{"type":"Button","props":{"y":623,"x":499,"width":177,"stateNum":1,"skin":"comp/common049.png","label":"label","height":39}},{"type":"Image","props":{"y":178,"x":808,"skin":"comp/image.png"}},{"type":"Image","props":{"y":178,"x":301,"skin":"comp/image.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.GameUI.uiView);

        }

    }
}

module ui {
    export class GameStartUI extends View {
		public ImgBg:Laya.Image;
		public BtnStart:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Panel","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Image","props":{"y":-2,"x":-26,"width":1280,"var":"ImgBg","skin":"comp/GameStart.png","pivotY":-8,"pivotX":-28,"height":720}},{"type":"Button","props":{"y":597,"x":1054,"width":125,"var":"BtnStart","stateNum":1,"skin":"comp/common049.png","sizeGrid":"15,0,5,0","labelStrokeColor":"#f6110d","labelStroke":3,"labelSize":30,"labelFont":"SimSun","label":"开始","height":73}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameStartUI.uiView);

        }

    }
}
