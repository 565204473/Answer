/*
* name;
*/
//加减乘除
enum SubtractingType {
    None = 0,
    Add, //+  
    Minus, //-
    ride, //*
    InAdd // /
}


class Gameplay {
    private lsSub: List<SubtracingData> = new List<SubtracingData>();
    private jsonPath: string = "res/Gamejson/Answer.json";
    constructor() {

    }

    public OnInit(): void
     {
        Laya.loader.load(this.jsonPath, Laya.Handler.create(this, this.OnLoaded), null, Laya.Loader.JSON);
    }

    private OnLoaded(): void {
        var json: JSON = Laya.loader.getRes(this.jsonPath);
        var str: String = JSON.stringify(json);
        for (let i = 0; i < 4; i++) {
            console.log(json[i]);
            let subtracingData: SubtracingData = new SubtracingData();
            subtracingData.id = json[i]["ID"];
            subtracingData.des = json[i]["Name"];
            subtracingData.type = json[i]["SubtractingType"];
            subtracingData.leftNumber = json[i]["left"];
            subtracingData.rightNumber = json[i]["right"];
            subtracingData.countNumber=json[i]["sum"];
            this.lsSub.Add(subtracingData);
            console.log("???***+++");
        }

    }

    public GetSubData(index: number): SubtracingData {
        console.log(this.lsSub.Count + "***+++");
        return this.lsSub.GetItem(index);
    }


    //单例
    private static _instance: Gameplay;
    public static GetInstance() {
        Gameplay._instance = Gameplay._instance || new Gameplay();
        return Gameplay._instance;
    }
}