import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./product-list/product-list";
import { LoginComponent } from './components/login-component/login-component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BarAssistant');
}

