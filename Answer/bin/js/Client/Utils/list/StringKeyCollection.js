/*
* name;
*/
var StringKeyCollection = /** @class */ (function () {
    function StringKeyCollection() {
        this.items = {};
        this.count = 0;
    }
    StringKeyCollection.prototype.ContainsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    StringKeyCollection.prototype.Count = function () {
        return this.count;
    };
    StringKeyCollection.prototype.Add = function (key, value) {
        if (!this.items.hasOwnProperty(key))
            this.count++;
        this.items[key] = value;
    };
    StringKeyCollection.prototype.ForEach = function (func) {
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                func(this.items[prop]);
            }
        }
    };
    StringKeyCollection.prototype.Remove = function (key) {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    };
    StringKeyCollection.prototype.Item = function (key) {
        return this.items[key];
    };
    StringKeyCollection.prototype.Set = function (key, value) {
        this.items[key] = value;
    };
    StringKeyCollection.prototype.Keys = function () {
        var keySet = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    };
    StringKeyCollection.prototype.Values = function () {
        var values = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    };
    StringKeyCollection.prototype.Clear = function () {
        this.items = {};
    };
    return StringKeyCollection;
}());
//# sourceMappingURL=StringKeyCollection.js.map