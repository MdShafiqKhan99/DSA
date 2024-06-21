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

function connectedIslandCount(graph){
  const visited = new Set();
  let count = 0;

  function dfs(node){
    if(!visited.has(node)){
      visited.add(node);
      for (const neighbour of graph[node]) {
        dfs(neighbour);
      }
    }
  }

  for (const node in graph) {
    if(!visited.has(node)){
      dfs(node)
      count++;
    }
  }

  return count;
}

console.log(connectedIslandCount(graph2));
