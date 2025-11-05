import { Component, OnInit } from '@angular/core';
import { IngredientTypeService } from '../../services/ingredienttype/ingredient-type-service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Button } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { IngredientType } from '../../model/ingredient-type';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-ingredient-type-management',
  imports: [TableModule, CommonModule, Button, InputTextModule, DialogModule, FormsModule, ConfirmDialog, Toast],
  templateUrl: './ingredient-type-management.html',
  styleUrls: ['./ingredient-type-management.css']
})
export class IngredientTypeManagement {
   ingredientsType!: IngredientType[];

    constructor(private ingredientTypeService: IngredientTypeService ) {

    }
    ngOnInit() {
        this.ingredientsType =this.ingredientTypeService.getData();      
    }
  // indice del ingrediente que se está editando, nulo si no se está editando.
  editingIndex: number | null = null;
  // editable copy of the ingredient data bound to the form
  editingModel: IngredientType | null = null;
  // si el panel de edición desplegable está visible
  editingVisible: boolean = false;
  //create dialog visibility and model
  createVisible: boolean = false;
  //modelo para crear nuevo ingrediente
  createModel: IngredientType | null = null;

  editIngredient(index: number) {    
    // Create a shallow copy to edit so changes are not applied until user saves
    this.editingIndex = index;
    this.editingModel = { ...this.ingredientsType[index] };
    // show slide-out panel
    this.editingVisible = true;
  }
  deleteIngredientType(IngredientType:  IngredientType) {
   //preguntar si quiere o no eliminar
   const confirmed = window.confirm(`¿Eliminar "${IngredientType?.name || 'este elemento'}"? Esta acción no se puede deshacer.`);
  if (!confirmed) {
    return; // no retorna nada porque el user cancelo
  }
    //quitar el ingrediente del array
    const index = this.ingredientsType.findIndex(it => it.id === IngredientType.id)
    this.ingredientsType.splice(index, 1);
  }
  
  saveEdit() {
    if (this.editingIndex === null || !this.editingModel) return;
    // write changes back to the array
    this.ingredientsType[this.editingIndex] = { ...this.editingModel };
    // reassign so PrimeNG detects changes
    this.ingredientsType = [...this.ingredientsType];
    // clear editing state
    this.editingIndex = null;
    this.editingModel = null;
    this.editingVisible = false;
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editingModel = null;
    this.editingVisible = false;
  }

  openCreateDialog() {
    // prepare an empty model; set sensible defaults for missing fields
    const maxId = this.ingredientsType && this.ingredientsType.length ? this.ingredientsType.reduce((m, it) => Math.max(m, it.id || 0), 0) : 0;
    this.createModel = {
      id: maxId + 1,
      name: '',
      description: '',
      image: '',
      quantity: 0,
      customizable: true
    };
    this.createVisible = true;
  }

  saveCreate() {
    if (!this.createModel) return;
    this.ingredientsType.push({ ...this.createModel });
    this.ingredientsType = [...this.ingredientsType];
    this.createVisible = false;
    this.createModel = null;
  }

  cancelCreate() {
    this.createVisible = false;
    this.createModel = null;
  }
   
}
