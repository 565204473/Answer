const intTimes: number = 1000;
const scoreConfig: number = 10;
class Gameplay {
    private lsSub: List<SubtracingData> = new List<SubtracingData>();
    private jsonPath: string = "res/Gamejson/Answer.json";
    private times: number;
    private indexCount: number;
    private score: number;

    constructor() {
        this.times = 0;
        this.indexCount = 0;
        this.score = 0;
    }

    public OnInit(): void {
        Laya.loader.load(this.jsonPath, Laya.Handler.create(this, this.OnLoaded), null, Laya.Loader.JSON);
    }

    private OnLoaded(): void {
        var json: JSON = Laya.loader.getRes(this.jsonPath);
        var str: String = JSON.stringify(json);
        for (let i = 0; i < 4; i++) {
            let subtracingData: SubtracingData = new SubtracingData();
            subtracingData.id = json[i]["ID"];
            subtracingData.des = json[i]["Name"];
            subtracingData.type = json[i]["SubtractingType"];
            subtracingData.leftNumber = json[i]["left"];
            subtracingData.rightNumber = json[i]["right"];
            subtracingData.countNumber = json[i]["sum"];
            this.lsSub.Add(subtracingData);
        }

    }

    public GetSubData(index: number): SubtracingData {
        return this.lsSub.GetItem(index);
    }

    public SetTimes(timess: number): void {
        this.times = timess;
    }

    public GetTimes(): Number {
        let count = (this.times / 100);
        return count;
    }

    public SetIndexCount(index: number): void {
        this.indexCount = index;
    }

    public GetIndexCount(): Number {
        return this.indexCount;
    }

    public SetScore(): void {
        this.score += scoreConfig;
    }

    public GetScore(): Number {
        return this.score;
    }

    public ClearScore(): void {
        this.score = 0;
    }
    //单例
    private static _instance: Gameplay;
    public static GetInstance() {
        Gameplay._instance = Gameplay._instance || new Gameplay();
        return Gameplay._instance;
    }
}