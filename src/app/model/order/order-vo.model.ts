import { OrderItemVO } from './order-item/order-item-vo.model';

export class OrderVO {
  orderId: number;
  ticket: string;
  total: string;
  orderItems: OrderItemVO[];
}
