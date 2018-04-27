namespace UI {
    export class PanelBattleGame extends BasePanel<ui.GameUI> {
        constructor(parent: Laya.Component, viewType: { new (): ui.GameUI }) {
            super(parent, viewType);
            this.assetArr=[{url: "res/atlas/comp.atlas"}];
        }

        public OnInit() {
            super.OnInit();

        }

        // public TryShow() {
        //     if (!this.isLoading) {
        //         this.Show();
        //     } else {
        //         if (!this.isPendingShow) {

        //             this.isPendingShow = true;
        //             Laya.loader.load(this.assetArr, Laya.Handler.create(this, this.OnLoad));
        //         }
        //     }

        // }


        public Update(deltaTime: number): void {


        }
    }
}



