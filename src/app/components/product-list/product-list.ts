import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { Product } from '../../model/product';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { EnterpriseService } from '../../services/enterprise-service';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, ButtonModule, TableModule, SelectModule, ],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {
  products:Product[]= [];
  newProduct: Product = {} as Product;
  clickedRow:  number = -1;
  selectedProduct:Product | null = null;
  selectableProducts: Product[] = [];
  
  onProductChange(event: SelectChangeEvent) {
  this.selectedProduct = event.value;
  this.productServie.addProduct(this.selectedProduct);
  }

addProduct() {
    this.productServie.addProduct(null);
  }
//productsEditables:ProducEditable[] = []

editProduct(fila: number){
  if(this.clickedRow == fila){
    this.clickedRow = -1
  }else{
  this.clickedRow=fila;

  }
}
deleteProduct(fila: number ){
  this.productServie.delete(fila)
}
constructor(private productServie:ProductService){
    this.products = this.productServie.getAllProducts();
    for (let p of this.products){
      //this.product.push({...p, editable: false})
    }
}


}
