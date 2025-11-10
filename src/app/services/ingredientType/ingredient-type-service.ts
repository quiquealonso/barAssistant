import { IngredientType } from './../../model/ingredient-type';
import { Injectable } from '@angular/core';
import * as DataIngredientType from './IngredientType.json';

@Injectable({
  providedIn: 'root'
})
export class IngredientTypeService {
  private data: IngredientType[] = (DataIngredientType as any).default as IngredientType[];
  getData(): IngredientType[] {
    return this.data;
  }
}
