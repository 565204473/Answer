namespace Task {

    export class TaskDays extends Task<TaskData> {
        private dicTask: NumKeyCollection<List<TaskData>>;
        constructor() {
            super();
            this.dicTask = new NumKeyCollection<List<TaskData>>();
        }

        public SetTaskData(type: number, data: TaskData) {
            if (!this.dicTask.ContainsKey(type)) {
                this.dicTask.Add(type, new List<TaskData>());
            }
            this.dicTask.Item(type).Add(data);
        }

        public GetTaskData(type: number, id: number): TaskData {
            if (!this.dicTask.ContainsKey(type)) {
                return null;
            }

            let length: number = this.dicTask.Item(type).GetItems().length;
            for (let i = 0; i < length; i++) {
                let dt: TaskData = this.dicTask.Item(type).GetItem(i);
                if (dt.id == id) {
                    return dt;
                }
            }
        }
    }
}
