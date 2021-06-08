import { ProductDTO } from "../../../product/model/product-dto.model";

export class OrderItemDTO {
  id: number;
  units: number;
  totalPrice: string;
  item: ProductDTO;
}
