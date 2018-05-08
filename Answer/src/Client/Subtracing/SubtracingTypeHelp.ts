class SubtracingTypeHelp {
    public static GetSubtracingType(type: SubtractingType): string {
        var typeString: string;
        switch (type) {
            case SubtractingType.None:  //默认选择的图片 ，找到？号在换掉
                typeString = "comp/ImgDef.png";
                break;
            case SubtractingType.Add:
                typeString = "comp/ImgAdd.jpg";
                break;
            case SubtractingType.Minus:
                typeString = "comp/ImgReduction.jpg";
                break;
            case SubtractingType.ride:
                typeString = "comp/ImgTake.jpg"
                break;
            case SubtractingType.InAdd:
                typeString = "comp/ImgInAdd.jpg";
                break;
        }

        return typeString;
    }

}
SubtracingTypeHelp;

