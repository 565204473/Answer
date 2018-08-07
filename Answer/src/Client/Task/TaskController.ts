namespace Task {

    export enum TaskType {
        TaskDays,

    }

    export class TaskController {
        private task: ITask<TaskData>;
        constructor() {
            this.task = new TaskDays();
        }

        public SetTaskData(type: TaskType, data: TaskData): void {
            switch (type) {
                case TaskType.TaskDays:
                   this.task.SetTaskData(type,data);
                    break;
            }
        }

        public GetTaskData(type: TaskType, id: number): TaskData {
            return this.task.GetTaskData(type, id);
        }


        // 单例模式
        private static _instance: TaskController;
        public static Instance() {

            TaskController._instance = TaskController._instance || new TaskController();
            return TaskController._instance;
        }
    }
}
