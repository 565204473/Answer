
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {
		public BtnClose:Laya.Button;
		public BtnAdd:Laya.Button;
		public BtnReduction:Laya.Button;
		public BtnTake:Laya.Button;
		public BtnEtc:Laya.Button;
		public ImgType:Laya.Image;
		public TxtLeft:Laya.Label;
		public RightTxt:Laya.Label;
		public TxtEtc:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Button","props":{"y":12,"x":1233,"width":40,"var":"BtnClose","stateNum":1,"skin":"comp/common009.png","sizeGrid":"0,0,0,0","name":"BtnClose","height":40}},{"type":"Text","props":{"y":64,"x":458,"width":400,"text":"我是游戏主场景","height":50,"fontSize":40,"color":"#ffffff"}},{"type":"Image","props":{"y":468,"x":944,"skin":"comp/image.png"}},{"type":"Image","props":{"y":3,"x":195,"skin":"comp/image.png"}},{"type":"Button","props":{"y":577,"x":16,"width":131,"var":"BtnAdd","stateNum":1,"skin":"comp/ImgAdd.jpg","height":137}},{"type":"Button","props":{"y":577,"x":157,"var":"BtnReduction","stateNum":1,"skin":"comp/ImgReduction.png"}},{"type":"Button","props":{"y":577,"x":310,"var":"BtnTake","stateNum":1,"skin":"comp/ImgTake.png"}},{"type":"Button","props":{"y":267,"x":825,"var":"BtnEtc","stateNum":1,"skin":"comp/ImgETC.jpg"}},{"type":"Image","props":{"y":263,"x":435,"var":"ImgType","skin":"comp/ImgAdd.jpg"}},{"type":"Label","props":{"y":303,"x":216,"width":188,"var":"TxtLeft","text":"1","height":79,"fontSize":50,"font":"Arial","color":"#f3e7e7"}},{"type":"Label","props":{"y":304,"x":654,"var":"RightTxt","text":"2","fontSize":50,"font":"Arial","color":"#f11713"}},{"type":"Text","props":{"y":314,"x":1051,"var":"TxtEtc","text":"11","fontSize":50,"font":"Arial","color":"#f6f6f6"}}]};
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
