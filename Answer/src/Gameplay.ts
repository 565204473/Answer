
class Gameplay {

    private lsSub: List<SubtracingData> = new List<SubtracingData>();
    private data: SubtracingData;
    constructor() {
        this.data = new SubtracingData();
        this.InitData();
    }

    public InitData(): void {
        this.lsSub.Clear();
        for (var index = 0; index < 2; index++) {
            var element = index;
            this.data.leftNumber = index;
            this.data.rightNumber = index + 1;
            this.lsSub.Add(this.data);
        }
        for (var index = 0; index < this.lsSub.Count(); index++) {

            console.log(this.lsSub.GetItem(index).leftNumber + "###")
            console.log(this.lsSub.GetItem(index).rightNumber + "###")
        }
    }

    public GetSubData(index: number): SubtracingData {

        return this.lsSub.GetItem(index);
    }


    //单例
    private static _instance: Gameplay;
    public static GetInstance() {
        Gameplay._instance = Gameplay._instance || new Gameplay();
        return Gameplay._instance;
    }
}