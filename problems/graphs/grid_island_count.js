const grid1 = [
  [1,0,0,1,0],
  [1,0,0,1,1],
  [0,1,0,1,0],
  [0,0,0,0,0],
  [0,0,1,1,1],
]

const grid2 = [
  ["L","W","W","L","W"],
  ["L","W","W","L","L"],
  ["W","L","W","L","W"],
  ["L","W","W","W","W"],
  ["L","W","L","L","L"],
]

function islandCount(grid){
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();

  let count = 0;

  function dfs(r,c){

    const position = r + ',' + c // this will convert row and column to comma separated string => "2,3"

    if(
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "W" ||
      visited.has(position)
    ){
      return false;
    }

    visited.add(position);

    dfs(r-1, c);
    dfs(r+1, c);
    dfs(r, c-1);
    dfs(r, c+1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if(grid[r][c] === "L" && !visited.has(r + ',' + c)){
        dfs(r,c);
        count++;
      }
    }
  }

  return count;
}

console.log(islandCount(grid2));