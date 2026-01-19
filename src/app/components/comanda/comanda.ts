import { Component, inject } from '@angular/core';
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { Product } from '../../model/product';
import { OrderLine } from '../../model/order-line';
import { DialogModule } from "primeng/dialog";
import { CategoryTypeService } from '../../services/categorytype/category-type-service';
import { CategoryType } from '../../model/category-type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductTypeService } from '../../services/productype/product-type-service';
import { ProductType } from '../../model/product-type';

@Component({
  selector: 'app-comanda',
  imports: [TableModule, ButtonModule, DialogModule, CommonModule, FormsModule],
  templateUrl: './comanda.html',
  styleUrl: './comanda.css'
})
export class Comanda {
   // Toggle single ingredient (remove/restore)
  toggleIngredient(ing: any) {
    ing.selected = !ing.selected;
  }
  tempQuantity: number = 1;

  showIngredientEdit: boolean = false;
  editableIngredients: any[] = [];

  orderLines: OrderLine[] = [];
    selectedProduct: ProductType | null = null;
    showConfirm: boolean = false;
    confirmMode: 'add' | 'edit' = 'add';
    orderLineToEdit: OrderLine | null = null;
  visible: boolean = false;
  categories: CategoryType[] = [];
  selectedCategory: CategoryType | null = null;
  productsByCategory: ProductType[] = [];
  showProducts: boolean = false;

  private categoryTypeService = inject(CategoryTypeService);
  private productTypeService = inject(ProductTypeService);

  addProducts() {
    this.visible = true;
    this.categories = this.categoryTypeService.getData();
    this.selectedCategory = null;
    this.showProducts = false;
    this.productsByCategory = [];
    this.selectedProduct = null;
    this.showConfirm = false;
    this.orderLineToEdit = null;
  }

  onCategorySelect(cat: CategoryType) {
    this.selectedCategory = cat;
    this.productsByCategory = this.productTypeService.getData().filter(p =>
      p.categoriesType && p.categoriesType.some(c => c.id === cat.id)
    );
    this.showProducts = true;
    this.selectedProduct = null;
    this.showConfirm = false;
    this.orderLineToEdit = null;
  }

  onAddProduct(prod: ProductType) {
    this.selectedProduct = prod;
    this.tempQuantity = 1;
    this.confirmMode = 'add';
    this.showConfirm = true;
    this.showIngredientEdit = false;
    this.editableIngredients = prod.ingredientsType ? prod.ingredientsType.map(i => ({ ...i, selected: true })) : [];
  }

  onEditOrderLine(orderLine: OrderLine) {
    this.selectedProduct = orderLine.product;
    this.tempQuantity = orderLine.quantity;
    this.confirmMode = 'edit';
    this.showConfirm = true;
    this.orderLineToEdit = orderLine;
  }

  confirmAddOrEdit(quantity: number = 1) {
    if (!this.selectedProduct) return;
    // Clamp quantity to a minimum of 1 so we never store invalid numbers
    const safeQty = Math.max(1, Number(quantity) || 1);
    let customIngredients = this.showIngredientEdit
      ? this.editableIngredients.filter(i => i.selected).map(i => ({ ...i, quantity: i.customQuantity }))
      : this.selectedProduct.ingredientsType;
    if (this.confirmMode === 'add') {
      const newOrderLine: OrderLine = {
        id: Date.now(),
        product: { ...this.selectedProduct, ingredientsType: customIngredients },
        quantity: safeQty
      };
      this.orderLines.push(newOrderLine);
    } else if (this.confirmMode === 'edit' && this.orderLineToEdit) {
      this.orderLineToEdit.product = { ...this.selectedProduct, ingredientsType: customIngredients };
      this.orderLineToEdit.quantity = safeQty;
    }
    if (this.showIngredientEdit) {
      // Si estábamos editando ingredientes, volver a la lista de ingredientes de la categoría actual
      this.showIngredientEdit = false;
      this.showConfirm = false;
      this.selectedProduct = null;
      this.orderLineToEdit = null;
      // Mantener visible y showProducts para seguir en la categoría actual
      return;
    } else {
      // Después de añadir producto sin editar ingredientes, volver a la lista de productos de la categoría actual
      this.showConfirm = false;
      this.selectedProduct = null;
      this.orderLineToEdit = null;
      this.showProducts = true;
      this.tempQuantity = 1;
      this.showIngredientEdit = false;
      this.editableIngredients = [];
      // Mantener visible para seguir añadiendo productos
      return;
    }
  }

  showEditIngredients() {
    this.showIngredientEdit = true;
  }

  cancelIngredientEdit() {
    this.showIngredientEdit = false;
  }

  onQuantityChange(val: number) {
    if (this.selectedProduct) {
      this.selectedProduct.quantity = val;
    }
    this.tempQuantity = val;
  }

  getSafeQuantity(): number {
    if (this.selectedProduct && typeof this.selectedProduct.quantity === 'number' && this.selectedProduct.quantity > 0) {
      return this.selectedProduct.quantity;
    }
    return this.tempQuantity > 0 ? this.tempQuantity : 1;
  }

  cancelConfirm() {
    this.showConfirm = false;
    this.selectedProduct = null;
    this.orderLineToEdit = null;
  }

  hasIngredients(product: ProductType | null): boolean {
    return !!(product?.ingredientsType && product.ingredientsType.length > 0);
  }

  finalizeOrder() {
    if (!this.orderLines.length) return;
    const orderTotal = this.orderLines.reduce((sum, line) => sum + (line.quantity * (line.product.sellPrice ?? 0)), 0);
    const order = {
      id: Date.now(),
      lines: [...this.orderLines],
      total: orderTotal
    };
    console.log('Orden creada', order);
    // Reset current working order after creation
    this.orderLines = [];
  }
}
