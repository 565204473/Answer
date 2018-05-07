namespace UI {

    export class PanelGameEnd extends BasePanel<ui.GameEndUI>{
        constructor(parent: Laya.Component, viewType: { new (): ui.GameEndUI }) {
            super(parent, viewType);
            this.assetArr = [{ url: "res/atlas/comp.atlas" }];
        }


        public Update(deltaTime: number): void {

        }

        public OnInit() {
            super.OnInit();
            this.view.BtnOpenGame.on(Laya.Event.CLICK, this, this.OnOpenNewGame);
        }

        public OnShow() {
            super.OnShow();
        }

        private OnOpenNewGame(): void {
            UI.UIMgr.GetInstance().Hide(UI.LOBBY_BATTLE_END);
            UI.UIMgr.GetInstance().Show(UI.LOBBY_GAME, Scope.Battle);
        }
    }
}



