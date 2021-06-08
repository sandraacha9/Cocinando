import { AllergensDTO } from "../allergens/model/allergens-dto.model";

export class ProductDTO {
  productId: number;
  title: string;
  description: string;
  url: string;
  price: string;
  allergens: Array<AllergensDTO>;
  category: number;
}
