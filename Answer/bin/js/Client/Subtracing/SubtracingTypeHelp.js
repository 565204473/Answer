var SubtracingTypeHelp = /** @class */ (function () {
    function SubtracingTypeHelp() {
    }
    SubtracingTypeHelp.GetSubtracingType = function (type) {
        var typeString;
        switch (type) {
            case SubtractingType.Add:
                typeString = "comp/ImgAdd.jpg";
                break;
            case SubtractingType.Minus:
                typeString = "comp/ImgReduction.jpg";
                break;
            case SubtractingType.ride:
                typeString = "comp/ImgTake.jpg";
                break;
            case SubtractingType.InAdd:
                typeString = "comp/ImgInAdd.jpg";
                break;
        }
        return typeString;
    };
    return SubtracingTypeHelp;
}());
SubtracingTypeHelp;
//# sourceMappingURL=SubtracingTypeHelp.js.map