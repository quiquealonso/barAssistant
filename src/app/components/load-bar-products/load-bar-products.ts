import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { PickList } from 'primeng/picklist';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-load-bar-products',
  imports: [PickList, NgClass],
  templateUrl: './load-bar-products.html',
  styleUrl: './load-bar-products.css'
})
export class LoadBarProducts {
sourceProducts!: Product[];
targetProducts!: Product[];
 constructor(
      private carService: ProductService,
      private cdr: ChangeDetectorRef
    ) {} 
    ngOnInit() {
      this.sourceProducts = this.carService.getAllProducts();
      this.targetProducts = [];
      this.cdr.detectChanges();
    }

}
