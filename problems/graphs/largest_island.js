const graph = {
  a: ['b', 'c'],
  b: ['a', 'c', 'd'],
  c: ['a', 'b', 'd'],
  d: ['b', 'c'],
  e: ['f'],
  f: ['e']
}

const graph2 = {
  b: [ 'a', 'c' ],
  a: [ 'b', 'c' ],
  c: [ 'a', 'b' ],
  q: [ 'r', 's', 'u', 't' ],
  r: [ 'q' ],
  s: [ 'q' ],
  u: [ 'q' ],
  t: [ 'q' ]
}


function largestIsland(graph) {
  const visited = new Set();
  let largest = 0;

  function dfs(node){

    if(visited.has(node)){
      return 0;
    }

    visited.add(node);
    let size = 1;

    for (const neighbour of graph[node]) {
      size = size + dfs(neighbour);
    }

    return size;
  }

  for (const node in graph) {
    if(!visited.has(node)){
      const islandSize = dfs(node);
      if(islandSize > largest){
        largest = islandSize;
      }
    }
  }

  return largest;
}

console.log(largestIsland(graph2));