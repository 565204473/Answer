
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameStartUI extends View {
		public ImgBg:Laya.Image;
		public BtnStart:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Panel","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":389,"width":500,"var":"ImgBg","skin":"comp/71726.jpg","height":378}},{"type":"Button","props":{"y":308,"x":510,"width":243,"var":"BtnStart","stateNum":1,"skin":"comp/common049.png","sizeGrid":"15,0,5,0","label":"开始","height":57}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameStartUI.uiView);

        }

    }
}
