/*
* name;
*/
var NumKeyCollection = /** @class */ (function () {
    function NumKeyCollection() {
        this.items = {};
        this.count = 0;
    }
    NumKeyCollection.prototype.ContainsKey = function (key) {
        return this.items.hasOwnProperty(key.toString());
    };
    NumKeyCollection.prototype.Empty = function () {
        return this.count == 0;
    };
    NumKeyCollection.prototype.Count = function () {
        return this.count;
    };
    NumKeyCollection.prototype.Add = function (key, value) {
        if (!this.items.hasOwnProperty(key.toString())) {
            this.count++;
            this.items[key] = value;
            console.log("加进来了");
        }
    };
    NumKeyCollection.prototype.ForEach = function (func) {
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                func(this.items[prop]);
            }
        }
    };
    NumKeyCollection.prototype.Remove = function (key) {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    };
    NumKeyCollection.prototype.Item = function (key) {
        return this.items[key];
    };
    NumKeyCollection.prototype.Set = function (key, value) {
        this.items[key] = value;
    };
    NumKeyCollection.prototype.Keys = function () {
        var keySet = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(Number(prop));
            }
        }
        return keySet;
    };
    NumKeyCollection.prototype.Values = function () {
        var Values = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                Values.push(this.items[prop]);
            }
        }
        return Values;
    };
    NumKeyCollection.prototype.Clear = function () {
        this.items = {};
    };
    return NumKeyCollection;
}());
//# sourceMappingURL=NumKeyCollection.js.map