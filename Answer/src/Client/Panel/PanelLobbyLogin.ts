namespace UI {
    export class PanelLobbyLogin extends BasePanel<ui.GameStartUI> {
        constructor(parent: Laya.Component, viewType: { new (): ui.GameStartUI }) {
            super(parent, viewType);
            this.assetArr = [
                { url: "res/atlas/comp.atlas" }
            ];
        }

        public OnInit() {
            super.OnInit();
            this.view.BtnStart.on(Laya.Event.CLICK, this, this.OnBtnStartClick);
        }

        public TryShow() {

            if (!this.isLoading) {
                this.Show();
            }
            else {
                if (!this.isPendingShow) {
                    this.isPendingShow = true;
                    Laya.loader.load(this.assetArr, Laya.Handler.create(this, this.OnLoad));
                }
            }
        }

        public Update(deltaTime: number): void {

        }

        private OnBtnStartClick(): void {
            console.log("开始游戏");

        }
    }


}
