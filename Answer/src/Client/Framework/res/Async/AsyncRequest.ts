module Res {

    export class AsyncRequest {
        private dicEntitys: { [loadId: number]: Laya.Handler } = {};
        constructor() {

        }
        
		private count: number = 0;
		public get Count(): number {
			return this.count;
		}

		public AddTask(loadId: number, handler: Laya.Handler): boolean {

			if (!this.ContainsTask(loadId)) {
				this.dicEntitys[loadId] = handler;
				this.count++;
				return true;
			}
			return false;
		}

		public RemoveTask(loadId: number): boolean {
			if (this.ContainsTask(loadId)) {
				delete this.dicEntitys[loadId];
				this.count--;
				return true;
			}
			return false;
		}

		private ContainsTask(loadId: number): boolean {
			return this.dicEntitys.hasOwnProperty(loadId.toString());
		}

		public Call(asset: Asset): void {
			for (let item in this.dicEntitys) {
				if (this.dicEntitys.hasOwnProperty(item)) {
					this.dicEntitys[item].runWith(asset);
				}
			}
		}
    }
}
