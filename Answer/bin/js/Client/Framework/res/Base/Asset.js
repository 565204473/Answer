var Res;
(function (Res) {
    var AssetType;
    (function (AssetType) {
        AssetType[AssetType["Type3D"] = 0] = "Type3D";
        AssetType[AssetType["Type2D"] = 1] = "Type2D";
        AssetType[AssetType["Json"] = 2] = "Json";
        AssetType[AssetType["Buffer"] = 3] = "Buffer";
        AssetType[AssetType["Text"] = 4] = "Text";
    })(AssetType = Res.AssetType || (Res.AssetType = {}));
})(Res || (Res = {}));
(function (Res) {
    var Asset = /** @class */ (function () {
        function Asset(assetobj, assetPath, assetType) {
            this.mAssetObj = assetobj;
            this.mAssetPath = assetPath;
            this.mAssetType = assetType;
        }
        Asset.prototype.GetAsset = function () {
            // console.log(this.mAssetObj);      
            // if (this.mAssetObj instanceof Laya.Sprite3D) {
            //     return Laya.Sprite3D.instantiate(this.mAssetObj);
            // } else if (this.mAssetObj instanceof Laya.Scene) {
            //     return this.mAssetObj;
            // }
            return this.mAssetObj;
        };
        Asset.prototype.Dispose = function () {
            if (this.mAssetType == Res.AssetType.Type3D) {
                this.mAssetObj.destory();
                this.UnLoad3DAsset();
            }
            else {
                this.UnLoad2DAsset();
            }
        };
        Asset.prototype.UnLoad2DAsset = function () {
            Laya.loader.clearRes(this.mAssetPath);
        };
        Asset.prototype.UnLoad3DAsset = function () {
            var dirIndex = this.mAssetPath.lastIndexOf("/");
            var dir = this.mAssetPath.substring(0, dirIndex);
            var nameIndex = this.mAssetPath.lastIndexOf(".");
            var name = this.mAssetPath.substring(dirIndex + 1, nameIndex);
            var manifestPath = dir + "/" + name + "_Manifest.json";
            Laya.loader.load([{ url: manifestPath, type: Laya.Loader.JSON }], Laya.Handler.create(this, this.On3DAssetManifestOk, [manifestPath]));
        };
        Asset.prototype.On3DAssetManifestOk = function (manifestPath) {
            var depJson = Laya.loader.getRes(manifestPath);
            if (null == depJson) {
                console.error("get json is null,path:{0}", manifestPath);
                return;
            }
            var depPath = depJson["Dependcies"];
            Laya.loader.clearRes(manifestPath);
            for (var _i = 0, depPath_1 = depPath; _i < depPath_1.length; _i++) {
                var path = depPath_1[_i];
                var dPath = "res/" + path;
                var resource = Laya.loader.getRes(dPath);
                if (null != resource) {
                    resource.dispose();
                }
                else {
                    console.error("resources is null,path:{0}", dPath);
                }
            }
        };
        return Asset;
    }());
    Res.Asset = Asset;
})(Res || (Res = {}));
//# sourceMappingURL=Asset.js.map