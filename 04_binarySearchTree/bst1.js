class BSTNode {
    /*
        [ Binary Search Tree ] is made by attaching nodes. Each node has three property
        1. key : it will hold the data
        2. left : it will hold left node
        3. right: it will hold right node
    */
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    /*
        Binary Search Tree starts with the [ root ]. We need to focus only on the [root], because each node already has [left] and [right]. 
    */
    constructor(){
        this.root = null;
    }

    // =============  [ Insert a new node ] ==================
    /*
        1. create new node.
        2. check if root is empty, if so then point root to newNode
        3. compare newNode with current root node, 
            if newNode is smaller, then point new node to the current root node's left part
            else if newNode is larger, then point newNode to the current root node's right part
    */

    insert(key){
        const newNode = new BSTNode(key);

        if(this.root === null){
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){
        // inside this function, we will treat the [ node ] as the [ root node ] for the current execution call.

        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode;
                return;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null){
                node.right = newNode;
                return;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    // =======================================================

    // =============== [Delete Node] =================
    delete(key){
        // we are replacing the root. but we are not actually removing the main root. it will be running recursively and replace the root where applicable
        this.root = this.deleteNode(this.root, key);
    }

    deleteNode(node, key){
        if(node === null){
            return null;
        }
        
        // check if key is smaller than node 
        if(key < node.key){
            // target key belongs to left side.
            node.left = this.deleteNode(node.left, key);
        } else if(key > node.key){
            // target key belongs to right side
            node.right = this.deleteNode(node.right, key);
        } else {
            // target node found with the key. 

            if(node.left === null && node.right === null){
                // this is the leaf node, just return null to delete
                return null;
            } else if(node.left === null){
                // current node has only one child
                return node.right;
            } else if(node.right === null){
                // current node has only one child
                return node.left;
            } else {
                // current node has two child, now find the smallest key in the right subtree

                let tempNode = this.findMinNode(node.right);
                node.key = tempNode.key; // here we are replacing the key of current node with the smallest key of the right sub tree

                // we already replaced the smallest key of right sub tree, now we have to remove this smallest key from the right sub tree
                node.right = this.deleteNode(node.right, tempNode.key);
            }
        }
        return node;
    }

    findMinNode(node){
        while(node.left){
            node = node.left;
        }
        return node;
    }

    // ===============================================

}

let bstTree = new BinarySearchTree();
bstTree.insert(15);
bstTree.insert(9);
bstTree.insert(19);