module Res {
    export class AssetLoaderAsync implements IAssetLoaderAsync {
        private static loadId:number=0;
        constructor() {

        }
        public Load(path: string, type: AssetType, complete: Laya.Handler): number {

            return 0;
        }

        public Stop(loadId: number): boolean {

          return false;
        }
    }

}
