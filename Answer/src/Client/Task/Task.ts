namespace Task {
    export abstract class Task<T> implements ITask<T>{

        public SetTaskData(type: number, param: T) {


        }

        public GetTaskData(type: number, id: number): T {

            return null;
        }

    }
}