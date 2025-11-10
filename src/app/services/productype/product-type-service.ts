import { Injectable } from '@angular/core';
import * as DataProductType from './productType.json';
import { ProductType } from '../../model/product-type';
@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  private data: ProductType[] = (DataProductType as any).default as ProductType[];
  getData(): ProductType[] {
    console.log(this.data);
    return this.data;
  }
  addProduct(product: ProductType) {
    this.data.push(product);
  }
  deleteProduct(prod: ProductType){
    const num = this.data.findIndex(i => i.id == prod.id)
    this.data.splice(num, 1)
  }
  editProduct(prod: ProductType){
    const num = this.data.findIndex(i => i.id == prod.id)
    this.data[num] = prod

  }
}
