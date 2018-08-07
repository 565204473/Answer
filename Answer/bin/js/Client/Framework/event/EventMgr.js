/*
* name;
*/
var EventSystem;
(function (EventSystem) {
    var EventMgr = /** @class */ (function () {
        function EventMgr() {
        }
        EventMgr.prototype.Init = function () {
            this.eventDispatcher = new EventSystem.EventDispatcher();
        };
        EventMgr.getInstance = function () {
            EventMgr._instance = EventMgr._instance || new EventMgr();
            return EventMgr._instance;
        };
        return EventMgr;
    }());
    EventSystem.EventMgr = EventMgr;
})(EventSystem || (EventSystem = {}));
//# sourceMappingURL=EventMgr.js.map