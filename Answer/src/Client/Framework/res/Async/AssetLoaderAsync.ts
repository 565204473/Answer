module Res {
    export class AssetLoaderAsync implements IAssetLoaderAsync {
        private static loadId: number = 0;
        private static dicRequests: { [path: string]: AsyncRequest } = {};
        private static lsStops: Array<string> = [];
        constructor() {

        }
        public Load(path: string, type: AssetType, complete: Laya.Handler): number {
            let request: AsyncRequest = AssetLoaderAsync.dicRequests[path];
            let isRequested: boolean = undefined != request;
            if (!isRequested) {
                request = new AsyncRequest();
                AssetLoaderAsync.dicRequests[path] = request;
            }
            let id: number = ++AssetLoaderAsync.loadId;
            request.AddTask(id, complete);
            if (!isRequested) {
                let arg = [{ Ipath: path, IType: type }];

                switch (type) {
                    case AssetType.Type3D:

                        break;
                    case AssetType.Type2D:

                        break;
                    case AssetType.Json:
                        Laya.loader.load([{ url: path, type: Laya.Loader.JSON }], Laya.Handler.create(this, this.OnAssetComplete, arg));
                        break;
                    case AssetType.Buffer:

                        break;
                    case AssetType.Text:

                        break;
                }

            }
            return id;
        }

        private OnAssetComplete(arg: any): void {
            let path: string = arg.Ipath;
            let type: AssetType = arg.IType;
            let asset: Asset = null;
            let assetObj: any = Laya.loader.getRes(path);
            if (undefined != assetObj) {
                asset = new Asset(assetObj, path, type);
            }

            let request: AsyncRequest = AssetLoaderAsync.dicRequests[path];
            if (undefined == request) {
                let index: number = AssetLoaderAsync.lsStops.indexOf(path);
                if (index >= 0) {
                    AssetLoaderAsync.lsStops.slice(index, 1);
                    console.warn(`request is undefined,it is stop, path:${path}`);

                    if (null != asset) {
                        asset.Dispose();
                    }
                }
                else {
                    console.error(`request is undefined,it is error,please check it, path:${path}`);
                }
                return;
            }

            delete AssetLoaderAsync.dicRequests[path];
            if (request.Count <= 0) {
                console.warn(`request is Count <=0,path:${path}`);
            }

            if (null != asset) {
                request.Call(asset);
            }
            else {
                request.Call(null);
                console.warn(`OnAssetComplete,assetObj is null,path:${path}`);
            }
        }

        public Stop(loadId: number): boolean {
            let path: string;
            for (var key in AssetLoaderAsync.dicRequests) {
                let request: AsyncRequest = AssetLoaderAsync.dicRequests[key];
                if (request.RemoveTask(loadId)) {
                    if (request.Count == 0) {
                        path = key;
                        break;
                    }
                }
            }

            let result: boolean = undefined != path;
            if (undefined != path) {
                Laya.loader.cancelLoadByUrl(path);
                AssetLoaderAsync.lsStops.push(path);
                delete AssetLoaderAsync.dicRequests[path];
            }
            return result;
        }
    }

}
