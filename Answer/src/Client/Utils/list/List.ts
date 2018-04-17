/*
* name;
*/
class List<T> {

    //数组list
    private _items = [];
    //获取当前list
    public GetItems() {

        return this._items;
    }

    //通过index获取list【index】元素
    public GetItem(index: number): T {

        return this._items[index];
    }

    // 清空list
    public Clear() {

        this._items = [];
    }

    //判断是否在这个list里面
    public Contains(item: T): boolean {
        for (var i = 0, j = this._items.length; i < j; i++) {
            if (this._items[i] == item) {
                return true;
            }
        }

        return false;
    }
    //list数量
    public Count() { return this._items.length; }

    //添加元素
    public Add(item: T) {

        this._items.push(item);
    }
    //删除某一个元素
    public Remove(item: T): boolean {
        for (var i = 0, j = this._items.length; i < j; i++) {
            if (this._items[i] == item) {
                this._items.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    //通过下标删除元素
    public RemoveIndex(index: number): boolean {
        if (index < 0 || index >= this._items.length) {
            return false;
        }
        this._items.splice(index, 1);
        return true;
    }
}