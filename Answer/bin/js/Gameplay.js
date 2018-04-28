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
        this.data = new SubtracingData();
        this.InitData();
    }
    Gameplay.prototype.InitData = function () {
        this.lsSub.Clear();
        for (var index = 0; index < 2; index++) {
            var element = index;
            this.data.leftNumber = index;
            this.data.rightNumber = index + 1;
            this.lsSub.Add(this.data);
        }
        console.log(this.lsSub.Count() + "添加的数据");
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