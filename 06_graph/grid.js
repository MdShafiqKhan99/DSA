// rows = grid.length
// cols = grid[0].length

/*

  position = grid[r][c]
  top => r - 1, c
  bottom => r + 1, c
  right => r, c + 1
  left => r, c -1

  out of bound check
  0 <= r < rows_length
  0 <= c < cols_length



*/

const grid1 = [
  ["L","W","W","L","W"],
  ["L","W","W","L","L"],
  ["W","L","W","L","W"],
  ["L","W","W","W","W"],
  ["L","W","L","L","L"],
]

function traverseGrid(grid){
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();

  function dfs(r,c){
    const position = r + ',' + c;

    if(
      // checking out of bound
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      // checking if the current position is Land
      grid[r][c] === "W" ||
      // checking if current position is visited
      visited.has(position)
    ){
      return false;
    }

    visited.add(position);
    
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if(grid[r][c] === "L" && !visited.has(r + ',' + c)) {
        dfs(r,c);
      }
    }
  }

  return visited;

}

console.log(traverseGrid(grid1));