namespace UI {

    export enum Scope {
        Global, // 全局，自己维护，底层不做处理
        Login,  //登录
        Lobby,  //平台
        Battle,  //战斗
        BattleEnd, //结算

    }

    export class UIMgr {

        private lstUI: NumKeyCollection<IUI> = new NumKeyCollection<IUI>();
        private dicScope: NumKeyCollection<List<IUI>> = new NumKeyCollection<List<IUI>>();
        private zOrderIndex: number = 0;
        constructor() {
            this.dicScope.Add(Scope.Global, new List<IUI>());
            this.dicScope.Add(Scope.Login, new List<IUI>());
            this.dicScope.Add(Scope.Lobby, new List<IUI>());
            this.dicScope.Add(Scope.Battle, new List<IUI>());
            this.dicScope.Add(Scope.BattleEnd, new List<IUI>());
        }

        public GetNextZOrder(): number {
            return ++this.zOrderIndex;
        }

        public Get(ui: number): IUI {

            return this.lstUI.Item(ui);
        }

        public Show(id: number, scope: Scope) {
            if (this.lstUI.ContainsKey(id)) {
                let panel: IUI = this.lstUI.Item(id);
                if (panel.IsLoading()) {
                    return;
                }
                if (!panel.IsVisible) {
                    panel.Show();
                }
                panel.BringToTop();
                return;
            } else {
                let panel: IUI = null;
                // let parent:Laya.Component=render

            }


        }

        public Hide(ui: number) {


        }

        public Destory(ui: number) {


        }

        public DestoryWithScope(scope: Scope) {


        }

        public DestoryWithoutScope(scope: Scope) {


        }

        public Update(deltaTime: number): void {


        }

        private static _instance: UIMgr;
        public static GetInstance() {

            UIMgr._instance = UIMgr._instance || new UIMgr();
            return UIMgr._instance;
        }
    }

}


