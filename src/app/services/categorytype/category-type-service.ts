import { inject, Injectable } from '@angular/core';
import * as DataCategorieType from './CategoryType.json';
import { CategoryType, ItemFlattened } from '../../model/category-type';
import { TreeNode } from 'primeng/api';
import { TreeNodeDataProvider } from '../../model/tree-node-data-provider';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryTypeService  {
  //el implements va fora
  private http = inject(HttpClient);
  constructor() { }
  getOrders(): Observable<CategoryType[]> { 
    const url = environment.apiUrl + "/orders/";
      //console.log('URL de la API per obtenir ordres:', url);
      return this.http.get<ApiResult<CategoryType[]>>(url).
        pipe(
          map(res => res.object), // Extraiem només l'array d'objectes
          catchError(err => {
            console.log('❌ Error:', err);
            return of([]); // Si falla, retorna un observable amb un array buit
          })
        );
    }
  } 
  
  
  
  
  
  
  
  
  
  
  /**private data: CategoryType[] = (DataCategorieType as any).default as CategoryType[];
  getData(): CategoryType[] {
    return this.data;
  }
  transformToTreeNode(category: CategoryType): TreeNode<CategoryType> {
    var node: TreeNode<CategoryType>;
    node = {
      label: category.name,
      data: category,
      leaf: true,
      children: [],
      parent: undefined,
      expanded: true
    };
    return node;
  }
  transformToListTreeNode(): TreeNode<CategoryType>[] {
    let nodes: TreeNode<CategoryType>[] = this.transformRecursivelyToListTreeNode(this.getData());
    return nodes;
  }
  transformRecursivelyToListTreeNode(data: CategoryType[]): TreeNode<CategoryType>[] {
    let nodes: TreeNode<CategoryType>[] = [];
    if (!data || data.length === 0) {
    }
    else {
      data?.forEach(category => {
        var node: TreeNode<CategoryType> = this.transformToTreeNode(category);
        var nodesFill: TreeNode<CategoryType>[] = this.transformRecursivelyToListTreeNode(category.subcategoriesType);
        nodesFill.forEach(nfill => {
          nfill.parent = node;
        })
        if (nodesFill.length > 0) {
          node.leaf = false;
        }
        node.children = nodesFill;
        nodes.push(node);
      })

    }
    return nodes;
  }
  flattenTreetable(nodes: TreeNode<CategoryType>[], level = 0): ItemFlattened[] {
    let aplanats: ItemFlattened[] = [];
    nodes.forEach(node => {
      let nodetemp: ItemFlattened = { id: node.data!.id, label: node.label!, isLeaf: node.leaf!, level: level };
      // Afegim el node pare/intermedi
      aplanats.push(nodetemp);
      // Afegim els fills recursivament
      if (node.children) {
        aplanats = aplanats.concat(this.flattenTreetable(node.children, level + 1));
      }
    });
    return aplanats;
  }


}**/