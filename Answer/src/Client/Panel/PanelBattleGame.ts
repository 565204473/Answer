namespace UI {
    export class PanelBattleGame extends BasePanel<ui.GameUI> {
        constructor(parent: Laya.Component, viewType: { new (): ui.GameUI }) {
            super(parent, viewType);
            this.assetArr = [{ url: "res/atlas/comp.atlas" }];
        }

        private panelData: SubtracingData;
        public OnInit() {
            super.OnInit();
            this.InitData();
        }

        private InitData(): void {
            this.panelData = Gameplay.GetInstance().GetSubData(0);
            let spriptImg: Laya.Sprite = new Laya.Sprite();
            if (this.panelData != null) {
                this.view.TxtLeft.text = this.panelData.leftNumber.toString();
                this.view.RightTxt.text = this.panelData.rightNumber.toString();
                this.view.TxtEtc.text = this.panelData.countNumber.toString();
                this.view.ImgType.skin= SubtracingTypeHelp.TypeMinus;
            }
        }

        public Update(deltaTime: number): void {

        }
    }
}



