// given a directed acyclic graph (DAG) and a start and dest. if you can reach to the dest then return true else return false


const graph = {
  a: ['b', 'c'],
  b: ['a', 'c', 'd'],
  c: ['a', 'b', 'd'],
  d: ['b', 'c'],
  e: ['f'],
  f: ['e']
}

// using depth first search
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

// console.log(hasPathDFS(graph, "a", "e"))

// using breadth first search

function hasPathBFS(graph, start, dest){
  const queue = [start];
  const visited = new Set();

  while(queue.length > 0){
    const node = queue.shift();
    if(node === dest){
      return true;
    }

    if(!visited.has(node)){
      visited.add(node);

      for (const neighbour of graph[node]) {
        if(!visited.has(neighbour)){
          queue.push(neighbour);
        }
      }
    }
  }

  return false;
}

// console.log(hasPathBFS(graph, "a", "c"))


// recursive method

function hasPathRecur(graph, start, dest, visited = new Set()){
  if(start === dest) return true;

  if(!visited.has(start)){
    visited.add(start)
    for (const neighbour of graph[start]) {
      if(hasPathRecur(graph, neighbour, dest, visited) === true){
        return true;
      }
    } 
  }

  return false;
}

console.log(hasPathRecur(graph, "a", "a"));