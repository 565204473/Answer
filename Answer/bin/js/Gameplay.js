/*
* name;
*/
//加减乘除
var SubtractingType;
(function (SubtractingType) {
    SubtractingType[SubtractingType["None"] = 0] = "None";
    SubtractingType[SubtractingType["Add"] = 1] = "Add";
    SubtractingType[SubtractingType["Minus"] = 2] = "Minus";
    SubtractingType[SubtractingType["ride"] = 3] = "ride";
    SubtractingType[SubtractingType["InAdd"] = 4] = "InAdd"; // /
})(SubtractingType || (SubtractingType = {}));
var Gameplay = /** @class */ (function () {
    function Gameplay() {
        this.lsSub = new List();
        this.jsonPath = "res/Gamejson/Answer.json";
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
            console.log("???***+++");
        }
    };
    Gameplay.prototype.GetSubData = function (index) {
        console.log(this.lsSub.Count + "***+++");
        return this.lsSub.GetItem(index);
    };
    Gameplay.GetInstance = function () {
        Gameplay._instance = Gameplay._instance || new Gameplay();
        return Gameplay._instance;
    };
    return Gameplay;
}());
//# sourceMappingURL=Gameplay.js.map