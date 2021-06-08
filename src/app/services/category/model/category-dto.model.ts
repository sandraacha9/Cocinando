export class CategoryDTO {
  id: number;
  name: string;
  order: number;
  subcategory: CategoryDTO[];
}
