/*
* name;
*/
namespace EventSystem
{
export class EventDispatcher implements IEventDispatcher {
    /**
     * 名称
     */
    public name: string;

    /**
     * 事件适配主体
     */
    private target: IEventDispatcher;

	/**
	 * 构建事件适配器
	 * @param target		事件适配主体
	 */
    constructor(target: IEventDispatcher = null) {
        this.target = target;
        if (this.target == null)
            this.target = this;
    }

    /**
     * 使用 EventDispatcher 对象注册事件侦听器对象，以使侦听器能够接收事件通知。
	 * @param type						事件的类型。
	 * @param listener					处理事件的侦听器函数。
	 * @param thisObject                listener函数作用域
     * @param priority					事件侦听器的优先级。数字越大，优先级越高。默认优先级为 0。
     */
    public addEventListener(type: number, listener: (event: Event) => void, thisObject: any, priority: number = 0): void {
        if (listener == null)
            return;

        $listernerCenter//
            .remove(this.target, type, listener, thisObject)//
            .add(this.target, type, listener, thisObject, priority);
    }

    /**
	 * 从 EventDispatcher 对象中删除侦听器. 如果没有向 IEventDispatcher 对象注册任何匹配的侦听器，则对此方法的调用没有任何效果。
	 *
	 * @param type						事件的类型。
	 * @param listener					要删除的侦听器对象。
     * @param thisObject                listener函数作用域
     */
    public removeEventListener(type: number, listener: (event: Event) => void, thisObject: any): void {

        $listernerCenter//
            .remove(this.target, type, listener, thisObject);
    }

    /**
	 * 将事件调度到事件流中. 事件目标是对其调用 dispatchEvent() 方法的 IEventDispatcher 对象。
	 * @param event						调度到事件流中的 Event 对象。
     */
    public dispatchEvent(event: Event): void {

        //设置目标
        event.target = this.target;
        var listeners: ListenerVO[] = $listernerCenter.getListeners(this.target, event.type);

        //遍历调用事件回调函数
        for (var i = 0; !!listeners && i < listeners.length && !event.isStop; i++) {
            var element = listeners[i];
            element.listener.call(element.thisObject, event);
        }
    }

    /**
	 * 检查 EventDispatcher 对象是否为特定事件类型注册了任何侦听器. 
	 *
	 * @param type		事件的类型。
	 * @return 			如果指定类型的侦听器已注册，则值为 true；否则，值为 false。
     */
    public hasEventListener(type: number): boolean {

        var has: boolean = $listernerCenter.hasEventListener(this.target, type);
        return has;
    }

    /**
     * 销毁
     */
    public destroy() {
        $listernerCenter.destroyDispatcherListener(this.target);
    }
}

/**
 * 监听数据
 */
class ListenerVO {
    /**
     * 监听函数
     */
    listener: (event: Event) => void;
    /**
     * 监听函数作用域
     */
    thisObject: any;
    /**
     * 优先级
     */
    priority: number;
}

/**
 * 事件监听中心
 */
class ListenerCenter {
    /**
     * 派发器与监听器字典
     */
    map: { dispatcher: IEventDispatcher, listener: NumKeyCollection<ListenerVO[]> }[] = [];

    /**
     * 添加监听
     * @param dispatcher 派发器
	 * @param type						事件的类型。
	 * @param listener					处理事件的侦听器函数。
	 * @param thisObject                listener函数作用域
     * @param priority					事件侦听器的优先级。数字越大，优先级越高。默认优先级为 0。
     */
    add(dispatcher: IEventDispatcher, type: number, listener: (event: Event) => any, thisObject: any = null, priority: number = 0): this {

        var dispatcherListener: NumKeyCollection<ListenerVO[]>  = this.getDispatcherListener(dispatcher);
        if (dispatcherListener == null) {
            dispatcherListener = this.createDispatcherListener(dispatcher);
        }

        var listeners: ListenerVO[] = dispatcherListener.Item(type) || [];

        this.remove(dispatcher, type, listener, thisObject);

        for (var i = 0; i < listeners.length; i++) {
            var element = listeners[i];
            if (priority > element.priority) {
                break;
            }
        }
        listeners.splice(i, 0, { listener: listener, thisObject: thisObject, priority: priority });

        dispatcherListener.Add(type, listeners);

        return this;
    }

    /**
     * 移除监听
     * @param dispatcher 派发器
	 * @param type						事件的类型。
	 * @param listener					要删除的侦听器对象。
     * @param thisObject                listener函数作用域
     */
    remove(dispatcher: IEventDispatcher, type: number, listener: (event: Event) => any, thisObject: any = null): this {

        var dispatcherListener: NumKeyCollection<ListenerVO[]> = this.getDispatcherListener(dispatcher);
        if (dispatcherListener == null) {
            return this;
        }

        var listeners: ListenerVO[] = dispatcherListener.Item(type);
        if (listeners == null) {
            return this;
        }

        for (var i = listeners.length - 1; i >= 0; i--) {
            var element = listeners[i];
            if (element.listener == listener && element.thisObject == thisObject) {
                listeners.splice(i, 1);
            }
        }

        if (listeners.length == 0) {
            dispatcherListener.Remove(type);
        }

        if (dispatcherListener.Empty()) {
            this.destroyDispatcherListener(dispatcher);
        }

        return this;
    }

    /**
     * 获取某类型事件的监听列表
     * @param dispatcher 派发器
     * @param type  事件类型
     */
    getListeners(dispatcher: IEventDispatcher, type: number): ListenerVO[] {

        var dispatcherListener: NumKeyCollection<ListenerVO[]> = this.getDispatcherListener(dispatcher);
        if (dispatcherListener == null) {
            return null;
        }

        return dispatcherListener.Item(type);
    }

    /**
     * 判断是否有监听事件
     * @param dispatcher 派发器
     * @param type  事件类型
     */
    hasEventListener(dispatcher: IEventDispatcher, type: number): boolean {

        var dispatcherListener: NumKeyCollection<ListenerVO[]> = this.getDispatcherListener(dispatcher);
        if (dispatcherListener == null) {
            return false;
        }

        return !!dispatcherListener.ContainsKey(type);
    }

    /**
     * 创建派发器监听
     * @param dispatcher 派发器
     */
    createDispatcherListener(dispatcher: IEventDispatcher): NumKeyCollection<ListenerVO[]> {

        var dispatcherListener = new NumKeyCollection<ListenerVO[]>();
        this.map.push({ dispatcher: dispatcher, listener: dispatcherListener });
        return dispatcherListener;
    }

    /**
     * 销毁派发器监听
     * @param dispatcher 派发器
     */
    destroyDispatcherListener(dispatcher: IEventDispatcher): void {

        for (var i = 0; i < this.map.length; i++) {
            var element = this.map[i];
            if (element.dispatcher == dispatcher) {
                element.dispatcher = null;
                element.listener = null;
                this.map.splice(i, 1);
                break;
            }
        }
    }

    /**
     * 获取派发器监听
     * @param dispatcher 派发器
     */
    getDispatcherListener(dispatcher: IEventDispatcher): NumKeyCollection<ListenerVO[]> {
        var dispatcherListener: NumKeyCollection<ListenerVO[]> = null;
        this.map.forEach(element => {
            if (element.dispatcher == dispatcher)
                dispatcherListener = element.listener;
        });

        return dispatcherListener;
    }
}


/**
 * 事件监听中心
 */
var $listernerCenter = new ListenerCenter();
}
