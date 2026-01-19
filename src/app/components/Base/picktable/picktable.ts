import { Component, input, output, signal } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { Input } from '@angular/core';
import { CategoryTypeService } from '../../../services/categorytype/category-type-service';
import { Button, ButtonDirective, ButtonIcon } from "primeng/button";

@Component({
  selector: 'app-picktable',
  imports: [TreeTableModule, Button, ButtonIcon],
  templateUrl: './picktable.html',
  styleUrl: './picktable.css'
})
export class Picktable<T> {

selectedNodeRight!: TreeNode<T>
selecteNodeLeft!:TreeNode<T>
files!: TreeNode<T>[];//! = te prometo que lo inicializo
values2 = signal<TreeNode<T>[]>([])
inputData = input<TreeNode<T>[]>()
outputData = output<TreeNode<T>[]>()
message: string =""

manageSelection($event: any){
  this.selectedNodeRight = $event.node;
}
moveToRigth($event: PointerEvent) {
  if(!this.selectedNodeRight || !this.selectedNodeRight.leaf){
    this.message = 'seleccio invalida';
    return;
  }
  if(this.values2().findIndex(n => n.data === this.selectedNodeRight.data) < 0){
    this.values2.update(currentValue =>{
      return[...currentValue, this.selectedNodeRight];
    }) 
  }
}
  moveToLeft($event: PointerEvent) {
    throw new Error('Method not implemented.');
}

}
