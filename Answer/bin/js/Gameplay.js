var Gameplay = /** @class */ (function () {
    function Gameplay() {
        this.lsSub = new List();
        this.jsonPath = "res/Gamejson/Answer.json";
        this.times = 0;
        this.indexCount = 0;
    }
    Gameplay.prototype.OnInit = function () {
        Laya.loader.load(this.jsonPath, Laya.Handler.create(this, this.OnLoaded), null, Laya.Loader.JSON);
    };
    Gameplay.prototype.OnLoaded = function () {
        var json = Laya.loader.getRes(this.jsonPath);
        var str = JSON.stringify(json);
        for (var i = 0; i < 4; i++) {
            console.log(json[i]);
            var subtracingData = new SubtracingData();
            subtracingData.id = json[i]["ID"];
            subtracingData.des = json[i]["Name"];
            subtracingData.type = json[i]["SubtractingType"];
            subtracingData.leftNumber = json[i]["left"];
            subtracingData.rightNumber = json[i]["right"];
            subtracingData.countNumber = json[i]["sum"];
            this.lsSub.Add(subtracingData);
        }
    };
    Gameplay.prototype.GetSubData = function (index) {
        return this.lsSub.GetItem(index);
    };
    Gameplay.prototype.SetTimes = function (timess) {
        this.times = timess;
    };
    Gameplay.prototype.GetTimes = function () {
        var count = (this.times / 100);
        return count;
    };
    Gameplay.prototype.SetIndexCount = function (index) {
        this.indexCount = index;
    };
    Gameplay.prototype.GetIndexCount = function () {
        return this.indexCount;
    };
    Gameplay.GetInstance = function () {
        Gameplay._instance = Gameplay._instance || new Gameplay();
        return Gameplay._instance;
    };
    return Gameplay;
}());
//# sourceMappingURL=Gameplay.js.map