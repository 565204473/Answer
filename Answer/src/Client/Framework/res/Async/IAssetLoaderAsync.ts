module Res {

    export interface IAssetLoaderAsync {
        Load(path: string, type: AssetType, completeL: Laya.Handler): number;
        Stop(loadId: number): boolean;
    }
}
