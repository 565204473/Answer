module Res {
    export class ResTest {
        private jsonPath: string = "res/Gamejson/Answer.json";
        constructor() {

        }

        public LoadJson(): void {
            let loadId = Res.ResMgr.GetInstance().GetResAsync(this.jsonPath, Res.AssetType.Json, Laya.Handler.create(this, function (obj: JSON): void {
                console.log("json data:", obj);
            }));

        }



        //单例
        private static _instance: ResTest;
        public static GetInstance() {
            ResTest._instance = ResTest._instance || new ResTest();
            return ResTest._instance;
        }
    }
}
