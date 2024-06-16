
// Sum of all nodes of a tree

// class BSTNode {
//     constructor(key){
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
// }


// Bread first traversal method
function TreeSum(root){
    if(root === null) return 0;

    let sum = 0;
    let queue = [root];

    while(queue.length > 0){
        const node = queue.shift();
        sum = sum + node.key;

        if(node.left !== null){
            queue.push(node.left);
        }

        if(node.right !== null){
            queue.push(node.right);
        }
    }

    return sum;
}

// treeSomeDFT => TreeSomeDepthFirstTraversal
function treeSumDFT(root) {

    if(root === null) return 0;

    let sum = 0;
    let stack = [root];

    while(stack.length > 0){
        const node = stack.pop();
        sum = sum + node.key;

        if(node.left !== null){
            stack.push(node.left);
        }

        if(node.right !== null){
            stack.push(node.right);
        }
    }

    return sum;
}

// treeSumRDFT = treeSumRecursiveDepthFirstTraversal

function treeSumRDFT(root) {
    if(root === null) return 0;

    return root.key + treeSumRDFT(root.left) + treeSumRDFT(root.right)
}