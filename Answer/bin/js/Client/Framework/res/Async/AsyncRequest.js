var Res;
(function (Res) {
    var AsyncRequest = /** @class */ (function () {
        function AsyncRequest() {
            this.dicEntitys = {};
            this.count = 0;
        }
        Object.defineProperty(AsyncRequest.prototype, "Count", {
            get: function () {
                return this.count;
            },
            enumerable: true,
            configurable: true
        });
        AsyncRequest.prototype.AddTask = function (loadId, handler) {
            if (!this.ContainsTask(loadId)) {
                this.dicEntitys[loadId] = handler;
                this.count++;
                return true;
            }
            return false;
        };
        AsyncRequest.prototype.RemoveTask = function (loadId) {
            if (this.ContainsTask(loadId)) {
                delete this.dicEntitys[loadId];
                this.count--;
                return true;
            }
            return false;
        };
        AsyncRequest.prototype.ContainsTask = function (loadId) {
            return this.dicEntitys.hasOwnProperty(loadId.toString());
        };
        AsyncRequest.prototype.Call = function (asset) {
            for (var item in this.dicEntitys) {
                if (this.dicEntitys.hasOwnProperty(item)) {
                    this.dicEntitys[item].runWith(asset);
                }
            }
        };
        return AsyncRequest;
    }());
    Res.AsyncRequest = AsyncRequest;
})(Res || (Res = {}));
//# sourceMappingURL=AsyncRequest.js.map