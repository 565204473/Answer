namespace UI {
    export class PanelBattleGame extends BasePanel<ui.GameUI> {
        constructor(parent: Laya.Component, viewType: { new (): ui.GameUI }) {
            super(parent, viewType);
            this.assetArr = [{ url: "res/atlas/comp.atlas" }];
        }

        private panelData: SubtracingData;
        private index: number;
        public OnInit() {
            super.OnInit();
            this.index = 0;
            this.view.BtnAdd.on(Laya.Event.CLICK, this, this.OnBtnAddClick);
            this.view.BtnReduction.on(Laya.Event.CLICK, this, this.OnBtnMinusClick);
            this.view.BtnTake.on(Laya.Event.CLICK, this, this.OnBtnRideClick);
            this.view.BtnInAdd.on(Laya.Event.CLICK, this, this.OnBtnInAddClick);
            this.InitData();
        }

        public Update(deltaTime: number): void {

        }

        private InitData(): void {
            this.OnRefreshViewData(SubtractingType.None, this.index);
        }


        private OnRefreshViewData(type: SubtractingType, index: number): void {
            this.panelData = Gameplay.GetInstance().GetSubData(index);
            let spriptImg: Laya.Sprite = new Laya.Sprite();
            if (this.panelData != null) {
                this.view.TxtLeft.text = this.panelData.leftNumber.toString();
                this.view.RightTxt.text = this.panelData.rightNumber.toString();
                this.view.TxtEtc.text = this.panelData.countNumber.toString();
                if (type == this.panelData.type) {
                    console.log("正确");
                    this.OnRefreshView(SubtractingType.None, this.index += 1);
                } else {

                    console.log("错误");

                }
            }
        }

        private OnRefreshView(type: SubtractingType, index: number): void {
            this.view.ImgType.skin = SubtracingTypeHelp.GetSubtracingType(type);
            this.OnRefreshViewData(type, index);
        }

        private OnBtnAddClick(): void {
            this.OnRefreshView(SubtractingType.Add, this.index);
        }

        private OnBtnMinusClick(): void {
            this.OnRefreshView(SubtractingType.Minus, this.index);
        }

        private OnBtnRideClick(): void {
            this.OnRefreshView(SubtractingType.ride, this.index);
        }

        private OnBtnInAddClick(): void {
            this.OnRefreshView(SubtractingType.InAdd, this.index);
        }
    }
}



