export class CategoryVO {
  constructor(
    public categoryId: number,
    public description: string,
    public subCategories: CategoryVO[]
  ) {}
}
