import { ProductModel } from './product.modes';

export interface CategoryModel {
    id: number;
    name: string;
    slug: string;
    products: ProductModel[];
}
