const graph = {
  a: ['b', 'c'],
  b: ['a', 'c', 'd'],
  c: ['a', 'b', 'd'],
  d: ['b', 'c'],
  e: ['f'],
  f: ['e']
}

function breadthFirst(graph, start){
  const queue = [start];
  const visited = new Set();

  while(queue.length > 0){
    const node = queue.shift();

    if(!visited.has(node)){
      visited.add(node);
      for (const neighbour of graph[node]) {
        if(!visited.has(neighbour)){
          queue.push(neighbour);
        }
      }
    }

  }

  return visited;
}