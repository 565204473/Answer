namespace UI {
    export class PanelBattleGame extends BasePanel<ui.GameUI> {
        constructor(parent: Laya.Component, viewType: { new (): ui.GameUI }) {
            super(parent, viewType);
            this.assetArr = [{ url: "res/atlas/comp.atlas" }];
        }

        private panelData: SubtracingData;
        public OnInit() {
            super.OnInit();
            this.view.BtnAdd.on(Laya.Event.CLICK, this, this.OnBtnAddClick);
            this.view.BtnReduction.on(Laya.Event.CLICK, this, this.OnBtnMinusClick);
            this.view.BtnTake.on(Laya.Event.CLICK, this, this.OnBtnRideClick);
            this.view.BtnInAdd.on(Laya.Event.CLICK, this, this.OnBtnInAddClick);
            this.InitData();
        }

        public Update(deltaTime: number): void {

        }

        private InitData(): void {
            this.panelData = Gameplay.GetInstance().GetSubData(0);
            let spriptImg: Laya.Sprite = new Laya.Sprite();
            if (this.panelData != null) {
                this.view.TxtLeft.text = this.panelData.leftNumber.toString();
                this.view.RightTxt.text = this.panelData.rightNumber.toString();
                this.view.TxtEtc.text = this.panelData.countNumber.toString();

            }
        }

        private OnRefreshView(type: SubtractingType): void {
            this.view.ImgType.skin = SubtracingTypeHelp.GetSubtracingType(type);
        }

        private OnBtnAddClick(): void {
            this.OnRefreshView(SubtractingType.Add);
        }

        private OnBtnMinusClick(): void {
            this.OnRefreshView(SubtractingType.Minus);
        }

        private OnBtnRideClick(): void {
            this.OnRefreshView(SubtractingType.ride);
        }

        private OnBtnInAddClick(): void {
            this.OnRefreshView(SubtractingType.InAdd);
        }
    }
}



