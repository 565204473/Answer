/*
* name;
*/
var List = /** @class */ (function () {
    function List() {
        //数组list
        this._items = [];
    }
    //获取当前list
    List.prototype.GetItems = function () {
        return this._items;
    };
    //通过index获取list【index】元素
    List.prototype.GetItem = function (index) {
        return this._items[index];
    };
    // 清空list
    List.prototype.Clear = function () {
        this._items = [];
    };
    //判断是否在这个list里面
    List.prototype.Contains = function (item) {
        for (var i = 0, j = this._items.length; i < j; i++) {
            if (this._items[i] == item) {
                return true;
            }
        }
        return false;
    };
    //list数量
    List.prototype.Count = function () { return this._items.length; };
    //添加元素
    List.prototype.Add = function (item) {
        this._items.push(item);
    };
    //删除某一个元素
    List.prototype.Remove = function (item) {
        for (var i = 0, j = this._items.length; i < j; i++) {
            if (this._items[i] == item) {
                this._items.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    //通过下标删除元素
    List.prototype.RemoveIndex = function (index) {
        if (index < 0 || index >= this._items.length) {
            return false;
        }
        this._items.splice(index, 1);
        return true;
    };
    return List;
}());
//# sourceMappingURL=List.js.map