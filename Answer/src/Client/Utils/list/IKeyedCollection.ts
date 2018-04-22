/*
* name;
*/
interface IKeyedCollection<T,U> {
    Add(key: T, value: U);
    ContainsKey(key: T): boolean;
    Count(): number;
    Item(key: T): U;
    Keys(): T[];
    Remove(key: T): U;
    Values(): U[];
}