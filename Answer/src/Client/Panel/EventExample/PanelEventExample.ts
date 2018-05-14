namespace UI {
    export class PanelEventExample extends BasePanel<ui.EventExampleUI>{
        constructor(parent: Laya.Component, viewType: { new (): ui.EventExampleUI }) {
            super(parent, viewType);
        }


        public Update(deltaTime: number): void {
        }


        public OnShow(): void {
            EventSystem.EventMgr.getInstance().eventDispatcher.addEventListener(EventSystem.LOGIN_OFFICIALREGIST, this.OnTestCallback, this)
        }

        public OnHide(): void {
            EventSystem.EventMgr.getInstance().eventDispatcher.removeEventListener(EventSystem.LOGIN_OFFICIALREGIST, this.OnTestCallback, this)
        }

        private OnTestCallback(event: EventSystem.Event): void {
            console.log("事件系统");
        }
    }
}
