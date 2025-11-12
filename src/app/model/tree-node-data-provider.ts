
import { TreeNode } from "primeng/api";

export interface TreeNodeDataProvider<T> {
  getData(): T[];
  transformToTreeNode(item: T): TreeNode<T>;
  transformToListTreeNode(): TreeNode<T>[];
  transformRecursivelyToListTreeNode(data: T[]): TreeNode<T>[];
}
