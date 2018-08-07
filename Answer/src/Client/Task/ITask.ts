namespace Task {
    export interface ITask<T> {
        SetTaskData(type: number, param: T);
        GetTaskData(type: number, id: number): T;
    }

}