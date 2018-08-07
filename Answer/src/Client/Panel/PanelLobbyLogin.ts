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
            this.view.TestTask.on(Laya.Event.CLICK, this, this.OnTestTaskClick);
            this.view.TaskGet.on(Laya.Event.CLICK, this, this.OnGetTestTaskData);
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
            UI.UIMgr.GetInstance().Hide(UI.LOBBY_LOGIN);
            UI.UIMgr.GetInstance().Show(UI.LOBBY_GAME, Scope.Battle);
            Res.ResTest.GetInstance().LoadJson();
        }

        private OnTestTaskClick(): void {
            console.log("测试任务");
            for (let i = 0; i < 5; i++) {
                console.log(i);
                let TaskDt: Task.TaskData = new Task.TaskData;
                TaskDt.id = i;
                TaskDt.name = "我是日常任务" + i;
                Task.TaskController.Instance().SetTaskData(Task.TaskType.TaskDays, TaskDt);
            }
        }

        private OnGetTestTaskData(): void {
            let data: Task.TaskData = Task.TaskController.Instance().GetTaskData(Task.TaskType.TaskDays, 3);
            if (data != null) {
                console.log(data.id + "***" + data.name);
            }
        }
    }
}
