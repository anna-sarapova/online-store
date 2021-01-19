import { ProductModel } from './product.modes';

export class Order {

        id: number;

        userId: number;

        productId: number;

        product: ProductModel;

        quantity: number;

        chatId: number;
}
