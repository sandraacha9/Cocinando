import { AllergensVO } from "./allergens/allergens-vo.model";

export class ProductVO {
  constructor(
    public productId: number,
    public title: string,
    public description: string,
    public url: string,
    public price: string,
    public allergens: Array<AllergensVO>,
    public category: number
  ) {}
}
