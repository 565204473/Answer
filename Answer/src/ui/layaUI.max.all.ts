
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class EventExampleUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.EventExampleUI.uiView);

        }

    }
}

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
		public BtnInAdd:Laya.Button;
		public TxtTimes:laya.display.Text;
		public TxtScore:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Button","props":{"y":12,"x":1233,"width":40,"var":"BtnClose","stateNum":1,"skin":"comp/common009.png","sizeGrid":"0,0,0,0","name":"BtnClose","height":40}},{"type":"Image","props":{"y":465,"x":413,"skin":"comp/image.png"}},{"type":"Button","props":{"y":594,"x":592,"width":0,"var":"BtnAdd","stateNum":1,"skin":"comp/ImgAdd.png","height":0}},{"type":"Button","props":{"y":594,"x":712,"var":"BtnReduction","stateNum":1,"skin":"comp/ImgReduction.png"}},{"type":"Button","props":{"y":594,"x":837,"var":"BtnTake","stateNum":1,"skin":"comp/ImgTake.png"}},{"type":"Button","props":{"y":267,"x":825,"var":"BtnEtc","stateNum":1,"skin":"comp/ImgETC.jpg"}},{"type":"Image","props":{"y":263,"x":435,"var":"ImgType","skin":"comp/ImgDef.png"}},{"type":"Label","props":{"y":303,"x":216,"width":188,"var":"TxtLeft","text":"1","height":79,"fontSize":50,"font":"Arial","color":"#f3e7e7"}},{"type":"Label","props":{"y":304,"x":654,"var":"RightTxt","text":"2","fontSize":50,"font":"Arial","color":"#f11713"}},{"type":"Text","props":{"y":314,"x":1051,"var":"TxtEtc","text":"11","fontSize":50,"font":"Arial","color":"#f6f6f6"}},{"type":"Button","props":{"y":594,"x":962,"var":"BtnInAdd","stateNum":1,"skin":"comp/ImgInAdd.png"}},{"type":"Text","props":{"y":59,"x":522,"var":"TxtTimes","text":"开始计时：10","fontSize":50,"font":"Arial","color":"#ee1916"}},{"type":"Text","props":{"y":130,"x":527,"var":"TxtScore","text":"分数:10","fontSize":50,"font":"Arial","color":"#fb0c08"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.GameUI.uiView);

        }

    }
}

module ui {
    export class GameEndUI extends View {
		public BtnOpenGame:Laya.Button;
		public TxtTimer:laya.display.Text;
		public TxtIndexCount:laya.display.Text;
		public TxtScore:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Text","props":{"y":10,"x":448,"text":"你完成的时间和题数：","fontSize":40,"font":"Arial","color":"#ead1d1"}},{"type":"Button","props":{"y":321,"x":459,"width":161,"var":"BtnOpenGame","skin":"comp/button.png","labelStrokeColor":"#e2120f","labelSize":20,"labelFont":"Arial","label":"重新开始","height":58}},{"type":"Text","props":{"y":86,"x":455,"var":"TxtTimer","text":"111","fontSize":50,"font":"Arial","color":"#f4f4f4"}},{"type":"Text","props":{"y":152,"x":457,"var":"TxtIndexCount","text":"111","fontSize":50,"font":"Arial","color":"#f9f4f4"}},{"type":"Text","props":{"y":219,"x":458,"var":"TxtScore","text":"111","fontSize":50,"font":"Arial","color":"#fbf8f8"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.GameEndUI.uiView);

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
