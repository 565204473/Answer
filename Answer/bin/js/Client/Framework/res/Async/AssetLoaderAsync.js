var Res;
(function (Res) {
    var AssetLoaderAsync = /** @class */ (function () {
        function AssetLoaderAsync() {
        }
        AssetLoaderAsync.prototype.Load = function (path, type, complete) {
            var request = AssetLoaderAsync.dicRequests[path];
            var isRequested = undefined != request;
            if (!isRequested) {
                request = new Res.AsyncRequest();
                AssetLoaderAsync.dicRequests[path] = request;
            }
            var id = ++AssetLoaderAsync.loadId;
            request.AddTask(id, complete);
            if (!isRequested) {
                var arg = [{ Ipath: path, IType: type }];
                switch (type) {
                    case Res.AssetType.Type3D:
                        break;
                    case Res.AssetType.Type2D:
                        break;
                    case Res.AssetType.Json:
                        Laya.loader.load([{ url: path, type: Laya.Loader.JSON }], Laya.Handler.create(this, this.OnAssetComplete, arg));
                        break;
                    case Res.AssetType.Buffer:
                        break;
                    case Res.AssetType.Text:
                        break;
                }
            }
            return id;
        };
        AssetLoaderAsync.prototype.OnAssetComplete = function (arg) {
            var path = arg.Ipath;
            var type = arg.IType;
            var asset = null;
            var assetObj = Laya.loader.getRes(path);
            if (undefined != assetObj) {
                asset = new Res.Asset(assetObj, path, type);
            }
            var request = AssetLoaderAsync.dicRequests[path];
            if (undefined == request) {
                var index = AssetLoaderAsync.lsStops.indexOf(path);
                if (index >= 0) {
                    AssetLoaderAsync.lsStops.slice(index, 1);
                    console.warn("request is undefined,it is stop, path:" + path);
                    if (null != asset) {
                        asset.Dispose();
                    }
                }
                else {
                    console.error("request is undefined,it is error,please check it, path:" + path);
                }
                return;
            }
            delete AssetLoaderAsync.dicRequests[path];
            if (request.Count <= 0) {
                console.warn("request is Count <=0,path:" + path);
            }
            if (null != asset) {
                request.Call(asset);
            }
            else {
                request.Call(null);
                console.warn("OnAssetComplete,assetObj is null,path:" + path);
            }
        };
        AssetLoaderAsync.prototype.Stop = function (loadId) {
            var path;
            for (var key in AssetLoaderAsync.dicRequests) {
                var request = AssetLoaderAsync.dicRequests[key];
                if (request.RemoveTask(loadId)) {
                    if (request.Count == 0) {
                        path = key;
                        break;
                    }
                }
            }
            var result = undefined != path;
            if (undefined != path) {
                Laya.loader.cancelLoadByUrl(path);
                AssetLoaderAsync.lsStops.push(path);
                delete AssetLoaderAsync.dicRequests[path];
            }
            return result;
        };
        AssetLoaderAsync.loadId = 0;
        AssetLoaderAsync.dicRequests = {};
        AssetLoaderAsync.lsStops = [];
        return AssetLoaderAsync;
    }());
    Res.AssetLoaderAsync = AssetLoaderAsync;
})(Res || (Res = {}));
//# sourceMappingURL=AssetLoaderAsync.js.map