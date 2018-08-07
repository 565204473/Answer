var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Task;
(function (Task) {
    var TaskDays = /** @class */ (function (_super) {
        __extends(TaskDays, _super);
        function TaskDays() {
            var _this = _super.call(this) || this;
            _this.dicTask = new NumKeyCollection();
            return _this;
        }
        TaskDays.prototype.SetTaskData = function (type, data) {
            if (!this.dicTask.ContainsKey(type)) {
                this.dicTask.Add(type, new List());
            }
            this.dicTask.Item(type).Add(data);
        };
        TaskDays.prototype.GetTaskData = function (type, id) {
            if (!this.dicTask.ContainsKey(type)) {
                return null;
            }
            var length = this.dicTask.Item(type).GetItems().length;
            for (var i = 0; i < length; i++) {
                var dt = this.dicTask.Item(type).GetItem(i);
                if (dt.id == id) {
                    return dt;
                }
            }
        };
        return TaskDays;
    }(Task.Task));
    Task.TaskDays = TaskDays;
})(Task || (Task = {}));
//# sourceMappingURL=TaskDays.js.map