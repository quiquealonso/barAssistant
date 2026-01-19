import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule, TableRowSelectEvent } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { Dialog, DialogModule } from "primeng/dialog";
import { Tree } from 'primeng/tree';
import { ProductType } from '../../model/product-type';
import { ProductTypeService } from '../../services/productype/product-type-service';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import { IngredientType } from '../../model/ingredient-type';
import { CategoryTypeService } from '../../services/categorytype/category-type-service';
import { Picktable } from "../Base/picktable/picktable";
import { CategoryType } from '../../model/category-type';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ProgressBar } from 'primeng/progressbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ConfirmationService } from 'primeng/api';
import { PickList } from "primeng/picklist";


@Component({
  selector: 'app-product-type-management',
  standalone: true,
  imports: [TableModule, CommonModule, InputTextModule, DialogModule, FormsModule, ButtonModule, IconFieldModule, InputIconModule, InputNumberModule, ConfirmDialogModule, PickList],
  templateUrl: './product-type-management.html',
  styleUrl: './product-type-management.css',
  providers: [TreeDragDropService, ConfirmationService],
  styles: [
    `.p-tree-node-dragover {
                border: 1px dashed var(--p-primary-color);
        }`
  ],

})
export class ProductTypeManagement {

  createVisible: boolean = false;

  editingVisible: boolean = false;
  eliminarVisible: boolean = false;
  guardarVisible: boolean = false;

  productsType!: ProductType[];

  searchValue: string | undefined;

  selectedProduct: ProductType;
  picklistVisible: boolean = false;
  ingredientsType: any[]|undefined;
  ingredientsProduct: any[]|undefined;
  constructor(private productTypeSercive: ProductTypeService) {
    this.selectedProduct = {
      id: 0,
      name: '',
      description: '',
      sellPrice: 0,
      image: '',
      quantity: 0,
      sectionType: {} as any,
      categoriesType: null,
      ingredientsType: null
    };

  }
  openCreateDialog() {
    this.createVisible = true;
  }
  onProductSave() {
    this.productTypeSercive.editProduct(this.selectedProduct);
    this.productsType = [...this.productTypeSercive.getData()];

    this.guardarVisible = false;
    this.selectedProduct = {} as ProductType;
  }
  dialogGuardar() {
    this.guardarVisible = true;
  }
  cancelCreate() {
  }
  saveCreate() {
  }
  infoIngredients() {
    this.editingVisible = true;
  }
  ngOnInit() {
    this.productsType = this.productTypeSercive.getData();
  }
  onRowSelect($event: TableRowSelectEvent<ProductType>) {
    console.log('Row selected:', this, this.selectedProduct);
  }
  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }
  dialogEliminar() {
    this.eliminarVisible = true;
  }
  onDelete() {
    this.productTypeSercive.deleteProduct(this.selectedProduct);
    this.productsType = [...this.productTypeSercive.getData()];
    this.eliminarVisible = false;
    this.selectedProduct = {} as ProductType;
  }
  getSeverity(status: string) {
    switch (status.toLowerCase()) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warn';

      case 'renewal':
        return null;
    }
    return null;
  }
}


