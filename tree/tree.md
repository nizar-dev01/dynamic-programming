# Tree Data Structures

### **Topics**

1. Trees
2. Binary Trees
3. Conversion of General Treee to Binary Tree
4. The Huffman Algorithm

## Trees
--------
It is a non-linear data structure which contain a hirerarchical relation between the elements.

### **Binary Tree**

A tree in which every node has at most two nodes

### **Binary Search Tree**

I a binary search tree, its left subtree has smaller elements and right subtree has larger elements. This is called the ***BST Invariant***

### ***Binary Search Tree - Inserting Elements***

When inserting a new element to the binary search tree, the new value is compared with the root node. If it is greater, it gets added/compared to the right node. Else to the left node.

This method is not very performant. It could lead to a linear time complexity while inserting. That's the reason **Balanced Binary Search Trees** were invented

### ***Binary Search Tree - Removing Elements***

Removing Elements is a two step process.
1. Finding the Element
2. Replace the node with its successor, if there's any, to maintain the BST invariant

#### Find the Element

During the finding phase, any of these four could happen

- Hit a null node ( Which means we hit a leaf node and still the value we're searching for is not found )
- Comparator value equal to 0 ( found the value )
- Comparator value less than 0 ( to find the value, we should search in the left subtree )
- Comparator value greater than 0 ( to find the value, we should search in the right subtree )

#### Replace/Remove the Element

While removing, there could be these four scenarios

1. **Node to remove is a leaf node** \
Since there is no subtrees to worry about, we can just simply remove the target node

2. **Node to remove has a right subtree** \
After removing the target node, the successor of the node becomes the root node, namely the target node will be replaced with the successor node

3. **Node to remove has a left subtree** \
Same as 2nd scenario

4. **Node to remove has both left and right subtrees** \
Here, both left and right subtrees could take over the root node. Either it will be the largest value in the left subtree or the smallest value in the right subtree
