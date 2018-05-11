module Res {
    export class AssetCacheCenter {
        private loaderAsync: IAssetLoaderAsync;
        private dicAssets: { [path: string]: Asset } = {};
        private dicLoading: { [path: number]: string } = {};
        constructor() {
            this.loaderAsync = new AssetLoaderAsync();
        }

        public LoadAsset(path: string, type: AssetType, complete: Laya.Handler): number {
            let asset: Asset = this.dicAssets[path];
            let isLoaded: boolean = undefined != asset;
            if (isLoaded) {
                complete.runWith(asset);
                return 0;
            } else {
                let loadId: number = this.loaderAsync.Load(path, type, Laya.Handler.create(this, function (asset: Res.Asset): void {
                    this.dicAssets[path] = asset;
                    delete this.dicLoading[loadId];
                    complete.runWith(asset);
                }));
                this.dicLoading[loadId] = path;
                return loadId;
            }
        }

        
    }

}
