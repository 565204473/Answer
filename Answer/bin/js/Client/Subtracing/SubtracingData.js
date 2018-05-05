var SubtractingType;
(function (SubtractingType) {
    SubtractingType[SubtractingType["None"] = 0] = "None";
    SubtractingType[SubtractingType["Add"] = 1] = "Add";
    SubtractingType[SubtractingType["Minus"] = 2] = "Minus";
    SubtractingType[SubtractingType["ride"] = 3] = "ride";
    SubtractingType[SubtractingType["InAdd"] = 4] = "InAdd"; // /
})(SubtractingType || (SubtractingType = {}));
var SubtracingData = /** @class */ (function () {
    function SubtracingData() {
        this.id = 0;
        this.leftNumber = 0;
        this.rightNumber = 0;
        this.countNumber = 0;
        this.type = SubtractingType.None;
    }
    return SubtracingData;
}());
//# sourceMappingURL=SubtracingData.js.map