import { Injectable } from '@angular/core';
import * as DataCategorieType from './CategoryType.json';
import { CategoryType } from '../../model/category-type';
import { TreeNode } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class CategoryTypeService {
  data: CategoryType[] = (DataCategorieType as any).default as CategoryType[];
  getData(): CategoryType[] {
    return this.data;
  }
  transformToTreeNode(category: CategoryType): TreeNode {
    var node: TreeNode;
    node = {
      label: category.name,
      data: category,
      children: [],
      expanded: true
    };
    return node;
  }
  transformToListTreeNode(): TreeNode[] {
    var nodes: TreeNode[] = [];
    this.getData()?.forEach(category => {
      var node: TreeNode = this.transformToTreeNode(category);
      category.categoriesType?.forEach(categoria => {
        node.children?.push(this.transformToTreeNode(categoria));
      });
      nodes.push(node);
    })
    return nodes;
  }
}
