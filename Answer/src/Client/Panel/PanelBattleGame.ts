namespace UI {
    export class PanelBattleGame extends BasePanel<ui.GameUI> {
        constructor(parent: Laya.Component, viewType: { new (): ui.GameUI }) {
            super(parent, viewType);
            this.assetArr = [{ url: "res/atlas/comp.atlas" }];
        }

        private panelData: SubtracingData;
        private index: number;
        private time: number = 1000;
        private isStatrt: boolean = true;
        public OnInit() {
            super.OnInit();
            this.view.BtnAdd.on(Laya.Event.CLICK, this, this.OnBtnAddClick);
            this.view.BtnReduction.on(Laya.Event.CLICK, this, this.OnBtnMinusClick);
            this.view.BtnTake.on(Laya.Event.CLICK, this, this.OnBtnRideClick);
            this.view.BtnInAdd.on(Laya.Event.CLICK, this, this.OnBtnInAddClick);

        }

        public OnShow() {
            super.OnShow();
            this.index = 0;
            this.isStatrt = true;
            Gameplay.GetInstance().ClearScore();
            this.InitData();
        }

        public OnHide() {
            super.OnHide();
            this.isStatrt = false;
                this.time = 1000;
        }

        public Update(deltaTime: number): void {
            if (this.isStatrt) {
                this.SetTxtTimesData((this.time -= 1));
            }
        }

        private SetTxtTimesData(times: number): void {
            Gameplay.GetInstance().SetTimes(intTimes - times);
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
                this.view.TxtScore.text = "分数：" + Gameplay.GetInstance().GetScore();
                if (type == this.panelData.type) {
                    let indexCount = this.index += 1;
                    Gameplay.GetInstance().SetScore();
                    this.OnRefreshView(SubtractingType.None, indexCount);
                    Gameplay.GetInstance().SetIndexCount(indexCount);
                } else {
                    this.view.ImgType.skin = SubtracingTypeHelp.GetSubtracingType(SubtractingType.None);
                    if (type != SubtractingType.None) {
                        UI.UIMgr.GetInstance().Hide(UI.LOBBY_GAME);
                        UI.UIMgr.GetInstance().Show(UI.LOBBY_BATTLE_END, Scope.BattleEnd);
                    }
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



