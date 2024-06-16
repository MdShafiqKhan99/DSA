
// Breadth First Traversal

// class BSTNode {
//     constructor(key){
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
// }

function breadFirstTraversal(root) {

    let values = [];

    if(root === null){
        return values; // or return any value, message or anything as required
    }

    let queue = [root];

    while(queue.length > 0){

        const node = queue.shift();
        values.push(node.key);

        if(node.left !== null){
            queue.push(node.left);
        }

        if(node.right !== null){
            queue.push(node.right);
        }
    }

    return values;
}