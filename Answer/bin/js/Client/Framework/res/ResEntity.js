var Res;
(function (Res) {
    var ResEntity = /** @class */ (function () {
        function ResEntity() {
            this.lsReferencer = new Array();
            this.count = 0;
        }
        Object.defineProperty(ResEntity.prototype, "Count", {
            get: function () {
                return this.count;
            },
            enumerable: true,
            configurable: true
        });
        ResEntity.prototype.AddReference = function (res) {
            this.lsReferencer.push(res);
            this.count++;
        };
        ResEntity.prototype.RemoveReference = function (res) {
            var index = this.lsReferencer.indexOf(res);
            if (index >= 0) {
                this.lsReferencer.slice(index, 1);
                this.count--;
                return true;
            }
            return false;
        };
        ResEntity.prototype.HasRes = function (res) {
            var index = this.lsReferencer.indexOf(res);
            if (index >= 0) {
                return true;
            }
            return false;
        };
        return ResEntity;
    }());
    Res.ResEntity = ResEntity;
})(Res || (Res = {}));
//# sourceMappingURL=ResEntity.js.map