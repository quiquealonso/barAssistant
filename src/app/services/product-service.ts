import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  delete(fila: number) {
this.allProducts.splice(fila,1)
  }


  allProducts:Product[]=[{id:1, name: 'Product A', description:'Product AAAA', price:100},
  {id:2, name: 'Product B', description:'Product BBBB', price:50}]
  
  
  constructor(){}
  getProducts(){
    return [...this.allProducts];
  }
  addProduct(product:Product | null){ 
  if(product == null) {
    product = {}as Product;
    product.name = "";
    product.description="";
    product.price=0;
    product.id = this.getNextID();
  }
  else{
    product.id = this.getNextID();
  }
  this.allProducts.push(product);
  return product
}
getNextID(){
  var ids = this.allProducts.map(p => p.id)
  var maxId = Math.max(...ids);
  return maxId + 1
  }
  
}
