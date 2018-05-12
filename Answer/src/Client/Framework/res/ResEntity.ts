module Res {

    export class ResEntity {
        private lsReferencer: Array<any>;
        private count: number;
        public get Count(): number {
            return this.count;
        }
        constructor() {
            this.lsReferencer = new Array<any>();
            this.count = 0;
        }

        public AddReference(res: any) {
            this.lsReferencer.push(res);
            this.count++;
        }

        public RemoveReference(res: any): boolean {
            let index: number = this.lsReferencer.indexOf(res);
            if (index >= 0) {
                this.lsReferencer.slice(index, 1);
                this.count--;
                return true;
            }
            return false;
        }

        public HasRes(res: any): boolean {
            let index: number = this.lsReferencer.indexOf(res);
            if (index >= 0) {
                return true;
            }
            return false;
        }
    }

}
