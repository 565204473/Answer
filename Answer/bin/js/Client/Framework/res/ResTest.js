var Res;
(function (Res) {
    var ResTest = /** @class */ (function () {
        function ResTest() {
            this.jsonPath = "res/Gamejson/Answer.json";
        }
        ResTest.prototype.LoadJson = function () {
            var loadId = Res.ResMgr.GetInstance().GetResAsync(this.jsonPath, Res.AssetType.Json, Laya.Handler.create(this, function (obj) {
                console.log("json data:", obj);
            }));
        };
        ResTest.GetInstance = function () {
            ResTest._instance = ResTest._instance || new ResTest();
            return ResTest._instance;
        };
        return ResTest;
    }());
    Res.ResTest = ResTest;
})(Res || (Res = {}));
//# sourceMappingURL=ResTest.js.map