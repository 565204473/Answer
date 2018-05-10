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
            this.OnRefreshData();
        }

        private OnRefreshData(): void {
            this.view.TxtTimer.text = "消耗时间：" + Gameplay.GetInstance().GetTimes().toString().substring(0, 1) + "秒";
            this.view.TxtIndexCount.text = "完成题数：" + Gameplay.GetInstance().GetIndexCount();
            this.view.TxtScore.text = "分数：" + Gameplay.GetInstance().GetScore();
        }

        private OnOpenNewGame(): void {
            UI.UIMgr.GetInstance().Hide(UI.LOBBY_BATTLE_END);
            UI.UIMgr.GetInstance().Show(UI.LOBBY_GAME, Scope.Battle);
        }
    }
}



