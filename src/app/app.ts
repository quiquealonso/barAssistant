import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductList } from "./components/product-list/product-list";
import { LoginComponent } from './components/login-component/login-component';
import { LoadBarProducts } from "./components/load-bar-products/load-bar-products";
import { IngredientTypeManagement } from "./components/ingredient-type-management/ingredient-type-management";
import { ProductTypeManagement } from "./components/product-type-management/product-type-management";
import { Picktable } from "./components/Base/picktable/picktable";
import { Button } from "primeng/button";
import { Drawer } from 'primeng/drawer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductTypeManagement, Button, Drawer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 title = 'barAssistant';
  private router = inject(Router);
  visible = signal(false); // Estat del menú

  navegar(ruta: string) {
    this.router.navigate([ruta]); // Cambiem de pàgina
    this.visible.set(false);      // Tanquem el menú automàticament
  }
}

