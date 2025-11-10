import { Component, NgModule, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from "primeng/table";
import { Button } from "primeng/button";
import { Dialog, DialogModule } from "primeng/dialog";
import { Tree } from 'primeng/tree';
import { ProductType } from '../../model/product-type';
import { ProductTypeService } from '../../services/productype/product-type-service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import { IngredientType } from '../../model/ingredient-type';
import { CategoryTypeService } from '../../services/categorytype/category-type-service';


@Component({
  selector: 'app-product-type-management',
  imports: [TableModule,CommonModule, InputTextModule,DialogModule,FormsModule, Button, Dialog, Tree],
  templateUrl: './product-type-management.html',
  styleUrl: './product-type-management.css',
  providers: [TreeDragDropService],
  styles: [
        `.p-tree-node-dragover {
                border: 1px dashed var(--p-primary-color);
        }`
    ],

})
export class ProductTypeManagement {
value1 = signal<TreeNode[]>([]);

value2 = signal<TreeNode[]>([]);

selectedProduct : ProductType = {} as ProductType
newProduct = {} as ProductType
cancelEdit() {
}
productsType!: ProductType[];
constructor(private productTypeSercive: ProductTypeService, private CategoryTypeService: CategoryTypeService) {

} 
ngOnInit() {
    this.productsType = this.productTypeSercive.getData();
        this.value1.set(this.CategoryTypeService.transformToListTreeNode());
      
  }
  
  editingIndex: number | null = null;
  // editable copy of the ingredient data bound to the form
  // si el panel de edición desplegable está visible
  editingVisible: boolean = false;
  //create dialog visibility and model
  createVisible: boolean = false;
  //modelo para crear nuevo ingrediente



  

cancelCreate() {
}
saveCreate() {
}
editProduct(prod: ProductType) {
  this.selectedProduct = prod
  this.editingVisible = true
  this.productTypeSercive.editProduct(prod)

}
deleteProduct(prod: ProductType) {
  this.productTypeSercive.deleteProduct(prod)

}
saveEdit() {
  this.productsType = [...this.productTypeSercive.getData()]
  this.editingVisible = false
}
openCreateDialog() {
 const maxId = this.productsType && this.productsType.length ? this.productsType.reduce((m, it) => Math.max(m, it.id || 0), 0) : 0;
    this.newProduct = {
      id: maxId + 1,
      name: '',
      description: '',
      image: '',
      quantity: 0,
      sellPrice: 0,
      sectionType: {
        id: 0, name: '',
        description: ''
      },
      categoriesType: [],
      ingredientsType: []
    } ;
    this.createVisible = true;
  }

}



