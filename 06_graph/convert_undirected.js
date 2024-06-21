// convert a undirected graph into directed graph

const edges = [
  ['b','a'],
  ['c','a'],
  ['b','c'],
  ['q','r'],
  ['q','s'],
  ['q','u'],
  ['q','t'],
];


function createGraph(edges){

  const graph = {};

  for (const edge of edges) {
    const [a,b] = edge;

    if(!(a in graph)){
      graph[a] = [];
    }

    if(!(b in graph)){
      graph[b] = [];
    }

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

console.log(createGraph(edges));


function hasPathDFS(graph, start, dest){

  const stack = [ start ];
  const visited = new Set();

  while(stack.length > 0){
    const node = stack.pop();
    if(node === dest){
      return true;
    }

    if(!visited.has(node)){
      visited.add(node);

      for (const neighbour of graph[node]) {
        if(!visited.has(neighbour)){
          stack.push(neighbour);
        }
      }
    }
  }

  return false;
}

function findPath(edges, start, dest){
  const graph = createGraph(edges);
  return hasPathDFS(graph, start, dest)
}

// console.log(findPath(edges, "q", "r"));