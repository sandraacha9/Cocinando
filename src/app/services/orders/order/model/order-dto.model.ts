import { OrderItemDTO } from "../../order-item/model/order-item-dto.model";

export class OrderDTO {
  idOrder: number;
  ticket: string;
  total: string;
  details: OrderItemDTO[];
}
