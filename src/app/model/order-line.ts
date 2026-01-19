import { ProductType } from './product-type';

export interface OrderLine {
  id: number;
  product: ProductType;
  quantity: number;
  notes?: string;
}
