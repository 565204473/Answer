var Res;
(function (Res) {
    var AssetCacheCenter = /** @class */ (function () {
        function AssetCacheCenter() {
            this.dicAssets = {};
            this.dicLoading = {};
            this.loaderAsync = new Res.AssetLoaderAsync();
        }
        AssetCacheCenter.prototype.LoadAsset = function (path, type, complete) {
            var asset = this.dicAssets[path];
            var isLoaded = undefined != asset;
            if (isLoaded) {
                complete.runWith(asset);
                return 0;
            }
            else {
                var loadId_1 = this.loaderAsync.Load(path, type, Laya.Handler.create(this, function (asset) {
                    this.dicAssets[path] = asset;
                    delete this.dicLoading[loadId_1];
                    complete.runWith(asset);
                }));
                this.dicLoading[loadId_1] = path;
                return loadId_1;
            }
        };
        AssetCacheCenter.prototype.StopAsset = function (loadId) {
            var path = this.dicLoading[loadId.toString()];
            var isLoading = undefined != path;
            if (isLoading) {
                delete this.dicLoading[loadId];
                return this.loaderAsync.Stop(loadId);
            }
            return false;
        };
        AssetCacheCenter.prototype.UnloadAsset = function (path) {
            var asset = this.dicAssets[path];
            if (undefined != asset) {
                asset.Dispose();
            }
            return false;
        };
        return AssetCacheCenter;
    }());
    Res.AssetCacheCenter = AssetCacheCenter;
})(Res || (Res = {}));
//# sourceMappingURL=AssetCacheCenter.js.map