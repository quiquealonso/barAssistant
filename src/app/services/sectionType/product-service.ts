
import { Injectable } from '@angular/core';
import { Product } from '../../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  allProducts: Product[] = [{ id: 1, name: 'Product A', description: 'Product AAAAA', price: 100 }, { id: 2, name: 'Product B', description: 'Product BBBBB', price: 150 }];
  constructor() { }
  delete(id: number) {
    let proDel = this.allProducts.find(p => p.id === id);
    if (!proDel) throw new Error('Product not found');
    else {
      let fila = this.allProducts.indexOf(proDel);
      if (fila >= 0)
        this.allProducts.splice(fila, 1);
    }
  }
  getAllProducts() {
    return [...this.allProducts]
  }
  getNextID() {
    let ids = this.allProducts.map(p => p.id);
    let maxId = Math.max(...ids);
    return maxId + 1;
  }
  addProduct(product: Product | null) {
    if (product == null) {
      product = {} as Product;
      product.name = "";
      product.description = "";
      product.price = 0;
      product.id = this.getNextID();
    }
    else {
      product.id = this.getNextID();
    }
    this.allProducts.push(product);
    return product;
  }
}
