/*
Binary search tree is made by attaching nodes.
Binary Node has tree property. (key, left, right)
*/

class BSTNode {
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }


    // ================ Insert Method ==============

    /*
        1. create new node.
        2. if the root is null then set root = newNode
        3. if newNode.key is less than root.key then newNode will be placed to the left subtree
        4. if newNode.key is greater than root.key then newNode will be placed to the right subtree
    */

    insert(key){
        const newNode = new BSTNode(key);

        if(this.root === null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){ // node is the current root
        
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null){
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // =======================================================


    // ======== Delete Method (In order successor algorithm) ==============

    /*  
        Deleting means we are replacing the root. 
        1. find the target node with the key
        2. if key is less than root.key then target is in left side, traverse left side
        3. if key is greater than root.key then target is in the right side, traverse right side.
        4. else key is found
            a. leaf node: (No child), then return null. 
            b. one child: if left is null, return right child, else if right is null, return left
            c. two children: follow the in-order successor algorithm
                => find the smallest key of the right subtree,
                => replace root.key with smallest.key
                => delete the smallest node of the right subtree
                return current root
    */

    delete(key){
        this.root = this.deleteNode(this.root, key);
    }

    deleteNode(node, key){ // node is the root node of current execution
        if(node === null){
            return null;
        }

        if(key < node.key){
            node.left = this.deleteNode(node.left, key);
        } else if(key > node.key ){
            node.right = this.deleteNode(node.right, key);
        } else {
            // target key found
            if(node.left === null && node.right === null){
                return null;
            } else if(node.left === null){
                return node.right;
            } else if(node.right === null){
                return node.left;
            } else {
                // two child, use in order successor algorithm
                const tempNode = this.findMinNode(node.right);
                node.key = tempNode.key;
                node.right = this.deleteNode(node.right, tempNode.key);
            }
        }
        return node;
    }

    findMinNode(node){
        while (node.left) {
            node = node.left;
        }
        return node;
    }


    // ===========================================================

    // ======= In-Pre-Post Order Traversal ==========

    inOrderTraversal(){
        const result = [];
        this.inOrder(this.root, result);
        return result;
    }

    inOrder(node, result){
        if(node !== null){
            this.inOrder(node.left, result);
            result.push(node.key);
            this.inOrder(node.right, result);
        }
    }

    preOrderTraversal(){
        const result = [];
        this.preOrder(this.root, result);
        return result;
    }

    preOrder(node, result){
        if(node !== null){
            result.push(node.key);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
    }

    postOrderTraversal(){
        const result = [];
        this.postOrder(this.root, result);
        return result;
    }

    postOrder(node, result){
        if(node !== null){
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.key);
        }
    }

    // ==============================================

}
