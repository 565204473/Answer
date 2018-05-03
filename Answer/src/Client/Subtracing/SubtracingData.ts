//加减乘除
enum SubtractingType {
    Add, //+  
    Minus, //-
    ride, //*
    InAdd // /
}

class SubtracingData {
    public leftNumber: number;
    public rightNumber: number;
    public countNumber: number;
    public type :SubtractingType;
    constructor() {
        this.leftNumber = 0;
        this.rightNumber = 0;
        this.countNumber = 0;
    }
}