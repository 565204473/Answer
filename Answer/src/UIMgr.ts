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
                let parent: Laya.Component = Render.LayerMgr.getInstance().GetUINode();
                switch (id) {
                    case LOBBY_LOGIN:
                        console.log("***" + parent);
                        panel = new PanelLobbyLogin(parent, ui.GameStartUI);
                        break;
                    case LOBBY_GAME:

                        break;
                    case LOBBY_BATTLE_END:

                        break;

                }

                if (panel != null) {
                    panel.TryShow();
                    panel.id = id;
                    this.lstUI.Add(id, panel);
                    if (scope != Scope.Global) {
                        console.log(panel);
                        this.dicScope.Item(scope).Add(panel);
                    }
                }
            }


        }

        public Hide(ui: number) {
            if (this.lstUI.ContainsKey(ui)) {
                let panel: IUI = this.lstUI.Item(ui);

                if (panel.IsLoading()) {
                    console.log("Error, hide while is loading:" + ui);
                    return;
                }
                if (panel.IsVisible()) {
                    panel.Hide();
                }

            }

        }

        public Destroy(ui: number) {
            if (this.lstUI.ContainsKey(ui)) {
                let panel: IUI = this.lstUI.Item(ui);

                // 先隐藏
                if (panel.IsVisible()) {
                    panel.Hide();
                }
                // 后销毁
                panel.Destory();

                this.lstUI.Remove(ui);
            }

        }

        public DestroyWithScope(scope: Scope) {
            let lstUI: List<IUI> = this.dicScope.Item(scope);

            let count = lstUI.Count();

            for (let i = 0; i < count; ++i) {
                this.Destroy(lstUI.GetItem(i).id);
            }

            lstUI.Clear();

        }

        public DestoryWithoutScope(scope: Scope) {
            let lstKeys = this.dicScope.Keys();

            for (let key of lstKeys) {
                if (key != scope) {
                    this.DestroyWithScope(key);
                }
            }

        }

        public Update(deltaTime: number): void {

            let UIList: IUI[] = this.lstUI.Values();
            let count: number = UIList.length;
            for (let i = 0; i < count; ++i) {
                if (UIList[i].IsVisible()) {
                    UIList[i].Update(deltaTime);
                }
            }
        }

        private static _instance: UIMgr;
        public static GetInstance() {

            UIMgr._instance = UIMgr._instance || new UIMgr();
            return UIMgr._instance;
        }
    }

}


