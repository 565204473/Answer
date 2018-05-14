/*
* name;
*/
namespace EventSystem
{
    export class EventMgr
    {
        public eventDispatcher:EventDispatcher;

        public Init()
        {
            this.eventDispatcher = new EventDispatcher();
        }

        // 单例模式
        private static _instance:EventMgr;

        public static getInstance() {
            EventMgr._instance = EventMgr._instance || new EventMgr();
            return EventMgr._instance;
        }
    }
    
}
