module Res {

    export enum AssetType {
        Type3D,
        Type2D,
        Json,
        Buffer,
        Text
    }
}


module Res {
    export class Asset {
        private mAssetObj: any;
        private mAssetPath: string;
        private mAssetType: AssetType;
        constructor(assetobj: any, assetPath: string, assetType: AssetType) {
            this.mAssetObj = assetobj;
            this.mAssetPath = assetPath;
            this.mAssetType = assetType;
        }

        public GetAsset(): any {
            if (this.mAssetObj instanceof Laya.Sprite3D) {
                return Laya.Sprite3D.instantiate(this.mAssetObj);
            } else if (this.mAssetObj instanceof Laya.Scene) {
                return this.mAssetObj;
            }
            return this.mAssetObj;
        }

        public Dispose(): void {
            if (this.mAssetType == AssetType.Type3D) {
                this.mAssetObj.destory();
                this.UnLoad3DAsset();
            } else {
                this.UnLoad2DAsset();
            }
        }

        private UnLoad2DAsset(): void {
            Laya.loader.clearRes(this.mAssetPath);

        }

        private UnLoad3DAsset(): void {
            let dirIndex: number = this.mAssetPath.lastIndexOf("/");
            let dir: string = this.mAssetPath.substring(0, dirIndex);
            let nameIndex = this.mAssetPath.lastIndexOf(".");
            let name: string = this.mAssetPath.substring(dirIndex + 1, nameIndex);
            let manifestPath: string = `${dir}/${name}_Manifest.json`;
            Laya.loader.load([{ url: manifestPath, type: Laya.Loader.JSON }],
                Laya.Handler.create(this, this.On3DAssetManifestOk, [manifestPath])
            );

        }

        private On3DAssetManifestOk(manifestPath: string): void {
            var depJson: JSON = Laya.loader.getRes(manifestPath);
            if (null == depJson) {
                console.error("get json is null,path:{0}", manifestPath);
                return;
            }
            var depPath: Array<string> = depJson["Dependcies"];
            Laya.loader.clearRes(manifestPath);
            for (var path of depPath) {
                var dPath: string = "res/" + path;
                var resource: Laya.Resource = Laya.loader.getRes(dPath);
                if (null != resource) {
                    resource.dispose();
                } else {
                    console.error("resources is null,path:{0}", dPath);
                }
            }
        }
    }
}

