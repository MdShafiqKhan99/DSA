//
const grid2 = [
  ["L","W","W","L","W"],
  ["L","W","W","W","L"],
  ["W","L","W","L","L"],
  ["L","W","W","W","W"],
  ["L","W","L","L","L"],
]

const grid1 = [
  [1,0,0,1,0],
  [1,0,0,1,1],
  [0,1,0,1,0],
  [0,0,0,0,0],
  [0,0,1,1,1],
]

function largestIsland(grid){

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let largest = 0;

  function exploreSize(r,c){

    const position = r + ',' + c;

    if(
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === 0 ||
      visited.has(position)
    ){
      return 0;
    }

    visited.add(position);

    let size = 1;
    size += exploreSize(r - 1, c);
    size += exploreSize(r + 1, c);
    size += exploreSize(r, c - 1);
    size += exploreSize(r, c + 1);

    return size;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if(grid[r][c] === 1 && !visited.has(r + ',' + c)){
        const size = exploreSize(r,c);
        if(size > largest){
          largest = size;
        }
      }
    }
  }
  return largest;
}

console.log(largestIsland(grid2));



function smallestIsland(grid){

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let smallest = Infinity;

  function exploreSize(r,c){

    const position = r + ',' + c;

    if(
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "W" ||
      visited.has(position)
    ){
      return 0;
    }

    visited.add(position);

    let size = 1;
    size += exploreSize(r - 1, c);
    size += exploreSize(r + 1, c);
    size += exploreSize(r, c - 1);
    size += exploreSize(r, c + 1);

    return size;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if(grid[r][c] === "L" && !visited.has(r + ',' + c)){
        const size = exploreSize(r,c);
        if(size < smallest){
          smallest = size;
        }
      }
    }
  }
  return smallest;
}

// console.log(smallestIsland(grid2));