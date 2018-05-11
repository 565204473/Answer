module Res {
    export class ResMgr {
        
        constructor() {

        }

        //单例
        private static _instance: ResMgr;
        public static GetInstance() {
            ResMgr._instance = ResMgr._instance || new ResMgr();
            return ResMgr._instance;
        }
    }
}
