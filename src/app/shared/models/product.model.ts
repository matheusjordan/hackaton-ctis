import { Category } from './category.model';

export class Product {
    id: number;
    name: string;
    value: number;
    description: string;
    category: Category;

    constructor(apiObj: any) {
        this.id = (apiObj.id !== undefined && apiObj.id !== null)
                                ? apiObj.id : null;
        this.name = (apiObj.name !== undefined && apiObj.name !== null)
                                 ? apiObj.name : null;
        this.value = (apiObj.value !== undefined && apiObj.value !== null)
                                ? apiObj.value : null;
        this.description = (apiObj.description !== undefined && apiObj.description !== null)
                                ? apiObj.description : null;
        this.category = (apiObj.category !== undefined && apiObj.category !== null)
                                ? new Category(apiObj.category) : null;
    }
}
