import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from '../../model/product-type';
@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  private apiUrl = 'http://localhost:3000/api/bar_assistant/v1/products'; // Cambia el puerto si es necesario

  constructor(private http: HttpClient) {}

  getData(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.apiUrl);
  }
  // Métodos addProduct, deleteProduct, editProduct se actualizarán para usar la API
}
