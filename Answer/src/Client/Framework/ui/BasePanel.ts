namespace UI {
    export abstract class BasePanel<T extends Laya.Component> implements IUI {
        id: number;
        isLoading: boolean = true;
        isPendingShow: boolean = false;
        parent: Laya.Component;
        view: T;
        assetArr: Array<any> = new Array<any>();
        viewType: new () => T;
        viewOrder: number;
        constructor(parent: Laya.Component, viewType: { new (): T }) {
            this.parent = parent;
            this.viewType = viewType;
        }

        protected OnInit() {
            this.view = new this.viewType();
            this.view.visible = false;
            this.view.zOrder = 0;
            this.parent.addChild(this.view);
        }

        protected OnLoad() {
            if (this.isPendingShow) {

                this.isLoading = false;
                this.isPendingShow = false;
                this.OnInit();
                this.OnShow();
            }
        }

        protected OnShow() {
            this.view.visible = true;
            this.view.zOrder = this.viewOrder;
        }

        protected OnHide() {
            this.view.visible = false;
            this.view.zOrder = 0;

        }

        protected OnDestory() {


        }

        public TryShow() {

            this.viewOrder = UI.UIMgr.GetInstance().GetNextZOrder();
            if (!this.isLoading) {

                this.Show();
            } else {
                if (!this.isPendingShow) {

                    this.isPendingShow = true;
                    Laya.loader.load(this.assetArr, Laya.Handler.create(this, this.OnLoad));
                }

            }

        }
        public Show() {
            if (!this.view.visible) {

                this.OnShow();
            }

        }

        public Hide() {
            if (this.view.visible) {

                this.OnHide();
            }

        }
        public Destory() {

            this.OnDestory();
        }
        public IsLoading(): boolean {

            return this.isLoading;
        }

        public IsVisible(): boolean {
            if (this.view == null) {
                return false;
            }
            return this.view.visible;
        }
        public BringToTop() {
            this.viewOrder = UI.UIMgr.GetInstance().GetNextZOrder();
            this.view.zOrder = this.viewOrder;

        }

        abstract Update(deltaTime: number): void
    }

}
