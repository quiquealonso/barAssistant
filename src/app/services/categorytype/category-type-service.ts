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
    var node: TreeNode<CategoryType>;
    node = {
      label: category.name,
      data: category,
      children: [],
      expanded: true
    };
    return node;
  }
  transformToListTreeNode(): TreeNode<CategoryType>[] {
    /*let nodes: TreeNode[] = [];
    this.getData()?.forEach(category => {
      var node: TreeNode = this.transformToTreeNode(category);
      category.categoriesType?.forEach(categoria => {
        node.children?.push(this.transformToTreeNode(categoria));

      });
      nodes.push(node);
    })
    */
    let nodes: TreeNode[] = this.transformRecursivelyToListTreeNode(this.getData());
    return nodes;
  }
  transformRecursivelyToListTreeNode(data: CategoryType[] | null | undefined): TreeNode<CategoryType>[] {
    let nodes: TreeNode<CategoryType>[] = [];
    if (!data || data.length === 0) {
    }
    else {
      data?.forEach(category => {
        var node: TreeNode<CategoryType> = this.transformToTreeNode(category);
        var nodesFill: TreeNode<CategoryType>[] = this.transformRecursivelyToListTreeNode(category.categoriesType);
        nodesFill.forEach(n => {
          n.parent = node;
        })
        node.children = nodesFill;
        nodes.push(node);
      })

    }
    return nodes;
  }
}