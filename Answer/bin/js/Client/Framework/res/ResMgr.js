var Res;
(function (Res) {
    var ResMgr = /** @class */ (function () {
        function ResMgr() {
            this.dicResEntity = {};
            this.assetCache = new Res.AssetCacheCenter();
        }
        ResMgr.prototype.GetResAsync = function (path, type, complete) {
            var loadId = this.assetCache.LoadAsset(path, type, Laya.Handler.create(this, function (asset) {
                var obj = null;
                if (null != asset) {
                    obj = asset.GetAsset();
                    this.AddReferenceNumber(obj, path);
                }
                complete.runWith(obj);
            }));
            return loadId;
        };
        ResMgr.prototype.GetResPath = function (obj) {
            for (var key in this.dicResEntity) {
                if (this.dicResEntity[key].HasRes(obj)) {
                    return key;
                }
            }
            console.error("this asset object not find:", obj);
            return undefined;
        };
        ResMgr.prototype.AddReferenceNumber = function (obj, path) {
            var entity = this.dicResEntity[path];
            if (undefined == entity) {
                entity = new Res.ResEntity();
                this.dicResEntity[path] = entity;
            }
            entity.AddReference(obj);
        };
        ResMgr.prototype.RemoveReferenceNumber = function (obj) {
            var path = this.GetResPath(obj);
            if (undefined == path) {
                return false;
            }
            var entity = this.dicResEntity[path];
            if (entity.RemoveReference(obj)) {
                if (entity.Count <= 0) {
                    delete this.dicResEntity[path];
                    this.assetCache.UnloadAsset(path);
                }
            }
            return true;
        };
        ResMgr.prototype.RecycleRes = function (obj) {
            if (null == obj || undefined == obj) {
                return false;
            }
            this.RemoveReferenceNumber(obj);
            if (obj instanceof Laya.Sprite3D || obj instanceof Laya.Scene) {
                obj.destroy();
            }
        };
        ResMgr.prototype.StopRes = function (loadId) {
            if (loadId == 0) {
                return false;
            }
            return this.assetCache.StopAsset(loadId);
        };
        ResMgr.GetInstance = function () {
            ResMgr._instance = ResMgr._instance || new ResMgr();
            return ResMgr._instance;
        };
        return ResMgr;
    }());
    Res.ResMgr = ResMgr;
})(Res || (Res = {}));
//# sourceMappingURL=ResMgr.js.map