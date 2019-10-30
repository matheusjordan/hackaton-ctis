import { Category } from '../models/category.model'
import { Product } from '../models/product.model'

export let categories: Category[] = [
    new Category({ id: 1, name: 'Comida'}),
    new Category({ id: 2, name: 'Bebida'}),
];
export let products: Product[] = [
    new Product({ id: 1, name: 'Coca-Cola 1L', value: 3.5, description: 'vidro', category: categories[1]}),
    new Product({ id: 1, name: 'Coca-Cola 2L', value: 6, description: 'retornavel', category: categories[1]}),
    new Product({ id: 1, name: 'Pao de mel', value: 2, description: 'caseiro', category: categories[0]}),
];
