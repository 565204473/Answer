/*
* name;
*/
//加减乘除
enum SubtractingType {

    Add, //+  
    Minus, //-
    ride, //*
    InAdd // /
}


class Gameplay {
    constructor() {

    }

//单例
    private static _instance: Gameplay;
    public static GetInstance() {
        Gameplay._instance = Gameplay._instance || new Gameplay();
        return Gameplay._instance;
    }
}