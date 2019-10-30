export class Category {
    id: number;
    name: string;

    constructor(apiObj: any) {
        this.id = (apiObj.id !== undefined && apiObj.id !== null) ? apiObj.id : null;
        this.name = (apiObj.name !== undefined && apiObj.name !== null) ? apiObj.name : null;
    }
}
