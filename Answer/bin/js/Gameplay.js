/*
* name;
*/
//加减乘除
var SubtractingType;
(function (SubtractingType) {
    SubtractingType[SubtractingType["Add"] = 0] = "Add";
    SubtractingType[SubtractingType["Minus"] = 1] = "Minus";
    SubtractingType[SubtractingType["ride"] = 2] = "ride";
    SubtractingType[SubtractingType["InAdd"] = 3] = "InAdd"; // /
})(SubtractingType || (SubtractingType = {}));
var Gameplay = /** @class */ (function () {
    function Gameplay() {
        this.lsSub = new List();
        this.jsonPath = "res/Gamejson/Answer.json";
        this.data = new SubtracingData();
        Laya.loader.load(this.jsonPath, Laya.Handler.create(this, this.OnLoaded), null, Laya.Loader.JSON);
        this.InitData();
    }
    Gameplay.prototype.OnLoaded = function () {
        var json = Laya.loader.getRes(this.jsonPath);
        var str = JSON.stringify(json);
        for (var i = 0; i < 4; i++) {
            console.log(json[0] + "json数据" + i);
        }
        console.log(json[1]);
    };
    Gameplay.prototype.InitData = function () {
        this.lsSub.Clear();
        for (var index = 0; index < 2; index++) {
            var element = index;
            this.data.leftNumber = index;
            this.data.rightNumber = index + 1;
            this.lsSub.Add(this.data);
        }
        for (var index = 0; index < this.lsSub.Count(); index++) {
            console.log(this.lsSub.GetItem(index).leftNumber + "###");
            console.log(this.lsSub.GetItem(index).rightNumber + "###");
        }
    };
    Gameplay.prototype.GetSubData = function (index) {
        return this.lsSub.GetItem(index);
    };
    Gameplay.GetInstance = function () {
        Gameplay._instance = Gameplay._instance || new Gameplay();
        return Gameplay._instance;
    };
    return Gameplay;
}());
//# sourceMappingURL=Gameplay.js.map