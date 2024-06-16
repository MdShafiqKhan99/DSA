// Depth First Traversal

// class BSTNode {
//     constructor(key){
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
// }


function deptFirstTraversal(root){
    let values = [];

    if(root === null){
        return values; // return null or empty array or any message
    }

    let stack = [root];
    
    while(stack.length > 0){
        const node = stack.pop();
        values.push(node.key);

        if(node.right !== null){
            stack.push(node.right);
        }

        if(node.left !== null){
            stack.push(node.left);
        }
    }

    return values;
}

function recursiveDeptFirstTraversal(root) {
    if(root ===  null){
        return; // or return any mesasge, empty array
    }

    const leftValues = recursiveDeptFirstTraversal(root.left);
    const rightValues = recursiveDeptFirstTraversal(root.right);

    return [root.key, ...leftValues, ...rightValues];
}

