var Task;
(function (Task) {
    var TaskType;
    (function (TaskType) {
        TaskType[TaskType["TaskDays"] = 0] = "TaskDays";
    })(TaskType = Task.TaskType || (Task.TaskType = {}));
    var TaskController = /** @class */ (function () {
        function TaskController() {
            this.task = new Task.TaskDays();
        }
        TaskController.prototype.SetTaskData = function (type, data) {
            switch (type) {
                case TaskType.TaskDays:
                    this.task.SetTaskData(type, data);
                    break;
            }
        };
        TaskController.prototype.GetTaskData = function (type, id) {
            return this.task.GetTaskData(type, id);
        };
        TaskController.Instance = function () {
            TaskController._instance = TaskController._instance || new TaskController();
            return TaskController._instance;
        };
        return TaskController;
    }());
    Task.TaskController = TaskController;
})(Task || (Task = {}));
//# sourceMappingURL=TaskController.js.map