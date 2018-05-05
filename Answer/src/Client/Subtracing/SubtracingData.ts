
enum SubtractingType {
    None,
    Add, //+  
    Minus, //-
    ride, //*
    InAdd // /
}

class SubtracingData {
    public id:number;
    public des:string;
    public leftNumber: number;
    public rightNumber: number;
    public countNumber: number;
    public type :SubtractingType;
    constructor() {
        this.id=0;
        this.leftNumber = 0;
        this.rightNumber = 0;
        this.countNumber = 0;
        this.type= SubtractingType.None;
    }
}