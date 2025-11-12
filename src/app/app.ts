import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./product-list/product-list";
import { LoginComponent } from './components/login-component/login-component';
import { LoadBarProducts } from "./components/load-bar-products/load-bar-products";
import { IngredientTypeManagement } from "./components/ingredient-type-management/ingredient-type-management";
import { ProductTypeManagement } from "./components/product-type-management/product-type-management";
import { Picktable } from "./components/Base/picktable/picktable";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, LoginComponent, LoadBarProducts, IngredientTypeManagement, ProductTypeManagement, Picktable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BarAssistant');
}

