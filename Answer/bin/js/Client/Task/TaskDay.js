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
    var TaskDay = /** @class */ (function (_super) {
        __extends(TaskDay, _super);
        function TaskDay() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskDay.prototype.SetTaskData = function (data) {
            this.dt = data;
        };
        TaskDay.prototype.GetTaskData = function () {
            console.log(this.dt);
            return this.dt;
        };
        return TaskDay;
    }(Task.Task));
    Task.TaskDay = TaskDay;
})(Task || (Task = {}));
//# sourceMappingURL=TaskDay.js.map