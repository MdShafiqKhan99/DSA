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
      graph[a] =  [];
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