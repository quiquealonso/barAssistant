import { CategoryType } from "./category-type";
import { IngredientType } from "./ingredient-type";
import { SectionType } from "./section-type";

export interface ProductType {
  id: number;
  name: string;
  description: string;
  sellPrice: number;
  image: string;
  quantity: number;
  sectionType: SectionType;
  categoriesType: CategoryType[] | null;
  ingredientsType: IngredientType[] | null;
}
