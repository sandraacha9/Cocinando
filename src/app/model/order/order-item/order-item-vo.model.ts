import { ProductVO } from './../../product/product-vo.model';

export class OrderItemVO {
  id: number;
  quantity: number;
  totalPrice: string;
  product: ProductVO;
}
