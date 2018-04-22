/*
* name;
*/
class NumKeyCollection<T> implements IKeyedCollection<number, T> {

    private items: { [index: number]: T } = {};
    private count: number = 0;

    public ContainsKey(key: number): boolean {

        return this.items.hasOwnProperty(key.toString());
    }

    public Empty(): boolean {

        return this.count == 0;
    }

    public Count(): number {

        return this.count;
    }

    public Add(key: number, value: T) {

        if (this.items.hasOwnProperty(key.toString())) {

            this.count++;
            this.items[key] = value;
        }
    }

    public ForEach(func: (value: T) => any) {
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                func(this.items[prop]);
            }
        }
    }

    public Remove(key: number): T {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    }

    public Item(key: number): T {
        return this.items[key];
    }

    public Set(key: number, value: T) {

        this.items[key] = value;
    }

    public Keys(): number[] {
        var keySet: number[] = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(Number(prop));
            }
        }
        return keySet;
    }

    public Values(): T[] {
        var Values: T[] = [];
        for (var prop in this.items) {

            if (this.items.hasOwnProperty(prop)) {

                Values.push(this.items[prop]);
            }
        }

        return Values;
    }

    public Clear(): void {

        this.items = {};
    }
}