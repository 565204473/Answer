var UI;
(function (UI) {
    var Scope;
    (function (Scope) {
        Scope[Scope["Global"] = 0] = "Global";
        Scope[Scope["Login"] = 1] = "Login";
        Scope[Scope["Lobby"] = 2] = "Lobby";
        Scope[Scope["Battle"] = 3] = "Battle";
        Scope[Scope["BattleEnd"] = 4] = "BattleEnd";
    })(Scope = UI.Scope || (UI.Scope = {}));
    var UIMgr = /** @class */ (function () {
        function UIMgr() {
            this.lstUI = new NumKeyCollection();
            this.dicScope = new NumKeyCollection();
            this.zOrderIndex = 0;
            this.dicScope.Add(Scope.Global, new List());
            this.dicScope.Add(Scope.Login, new List());
            this.dicScope.Add(Scope.Lobby, new List());
            this.dicScope.Add(Scope.Battle, new List());
            this.dicScope.Add(Scope.BattleEnd, new List());
        }
        UIMgr.prototype.GetNextZOrder = function () {
            return ++this.zOrderIndex;
        };
        UIMgr.prototype.Get = function (ui) {
            return this.lstUI.Item(ui);
        };
        UIMgr.prototype.Show = function (id, scope) {
            if (this.lstUI.ContainsKey(id)) {
                var panel = this.lstUI.Item(id);
                if (panel.IsLoading()) {
                    return;
                }
                if (!panel.IsVisible) {
                    panel.Show();
                }
                panel.BringToTop();
                return;
            }
            else {
                var panel = null;
                var parent_1 = Render.LayerMgr.getInstance().GetUINode();
                switch (id) {
                    case UI.LOBBY_LOGIN:
                        console.log("***" + parent_1);
                        panel = new UI.PanelLobbyLogin(parent_1, ui.GameStartUI);
                        break;
                    case UI.LOBBY_GAME:
                        break;
                    case UI.LOBBY_BATTLE_END:
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
        };
        UIMgr.prototype.Hide = function (ui) {
            if (this.lstUI.ContainsKey(ui)) {
                var panel = this.lstUI.Item(ui);
                if (panel.IsLoading()) {
                    console.log("Error, hide while is loading:" + ui);
                    return;
                }
                if (panel.IsVisible()) {
                    panel.Hide();
                }
            }
        };
        UIMgr.prototype.Destroy = function (ui) {
            if (this.lstUI.ContainsKey(ui)) {
                var panel = this.lstUI.Item(ui);
                // 先隐藏
                if (panel.IsVisible()) {
                    panel.Hide();
                }
                // 后销毁
                panel.Destory();
                this.lstUI.Remove(ui);
            }
        };
        UIMgr.prototype.DestroyWithScope = function (scope) {
            var lstUI = this.dicScope.Item(scope);
            var count = lstUI.Count();
            for (var i = 0; i < count; ++i) {
                this.Destroy(lstUI.GetItem(i).id);
            }
            lstUI.Clear();
        };
        UIMgr.prototype.DestoryWithoutScope = function (scope) {
            var lstKeys = this.dicScope.Keys();
            for (var _i = 0, lstKeys_1 = lstKeys; _i < lstKeys_1.length; _i++) {
                var key = lstKeys_1[_i];
                if (key != scope) {
                    this.DestroyWithScope(key);
                }
            }
        };
        UIMgr.prototype.Update = function (deltaTime) {
            var UIList = this.lstUI.Values();
            var count = UIList.length;
            for (var i = 0; i < count; ++i) {
                if (UIList[i].IsVisible()) {
                    UIList[i].Update(deltaTime);
                }
            }
        };
        UIMgr.GetInstance = function () {
            UIMgr._instance = UIMgr._instance || new UIMgr();
            return UIMgr._instance;
        };
        return UIMgr;
    }());
    UI.UIMgr = UIMgr;
})(UI || (UI = {}));
//# sourceMappingURL=UIMgr.js.map