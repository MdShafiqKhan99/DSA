const graph = {
  a: ['b', 'c'],
  b: ['a', 'c', 'd'],
  c: ['a', 'b', 'd'],
  d: ['b', 'c'],
  e: ['f'],
  f: ['e']
}


// iterative approach

function depthFirst(graph, start){

  const stack = [start];
  const visited = new Set();

  while(stack.length > 0){

    const node = stack.pop();
    if(!visited.has(node)){
      visited.add(node);
      console.log(node);
      for (const neighbour of graph[node]) {
        if(!visited.has(neighbour)){

          stack.push(neighbour);
        }
      }
    }
  }

  return visited;
}

// console.log(depthFirst(graph, "a"));


function depthFSR(graph, startNode, visited = new Set()) {

  if(!visited.has(startNode)){
    visited.add(startNode);

    for (const neighbour of graph[startNode]) {
      depthFSR(graph, neighbour, visited);
    }
  }

  return visited;


}

console.log(depthFSR(graph, "a"));
