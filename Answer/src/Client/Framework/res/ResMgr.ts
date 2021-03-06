module Res {
    export class ResMgr {
        private assetCache: AssetCacheCenter;
        private dicResEntity: { [path: string]: ResEntity } = {};
        constructor() {
            this.assetCache = new AssetCacheCenter();
        }

        public GetResAsync(path: string, type: AssetType, complete: Laya.Handler): number {
            let loadId = this.assetCache.LoadAsset(path, type, Laya.Handler.create(this, function (asset: Asset): void {
                let obj = null;
                if (null != asset) {
                    obj = asset.GetAsset();
                    this.AddReferenceNumber(obj, path);
                }
                complete.runWith(obj);
            }));
            return loadId;
        }

        private GetResPath(obj: any): string {
            for (var key in this.dicResEntity) {
                if (this.dicResEntity[key].HasRes(obj)) {
                    return key;
                }
            }
            console.error("this asset object not find:", obj);
            return undefined;
        }

        private AddReferenceNumber(obj: any, path: string): void {
            let entity: ResEntity = this.dicResEntity[path];
            if (undefined == entity) {
                entity = new ResEntity();
                this.dicResEntity[path] = entity;
            }
            entity.AddReference(obj);
        }

        private RemoveReferenceNumber(obj: any): boolean {
            let path: string = this.GetResPath(obj);
            if (undefined == path) {
                return false;
            }
            let entity: ResEntity = this.dicResEntity[path];
            if (entity.RemoveReference(obj)) {
                if (entity.Count <= 0) {
                    delete this.dicResEntity[path];
                    this.assetCache.UnloadAsset(path);
                }
            }
            return true;
        }

        public RecycleRes(obj: any) {
            if (null == obj || undefined == obj) {
                return false;
            }
            this.RemoveReferenceNumber(obj);
            if (obj instanceof Laya.Sprite3D || obj instanceof Laya.Scene) {
                obj.destroy();
            }
        }

        public StopRes(loadId: number): boolean {
            if (loadId == 0) {
                return false;
            }
            return this.assetCache.StopAsset(loadId);
        }

        //单例
        private static _instance: ResMgr;
        public static GetInstance() {
            ResMgr._instance = ResMgr._instance || new ResMgr();
            return ResMgr._instance;
        }
    }
}
