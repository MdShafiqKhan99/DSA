var uniquePathsWithObstacles = function(grid, row = 0, col = 0, memo = {}) {
    
  const pos = row + "," + col;

  if(pos in memo) return memo[pos];

  if(
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] === 1
  ){
    return 0;
  }

  if(row === grid.length - 1 && col === grid[0].length - 1){
    return 1;
  }

  const rightPaths = uniquePathsWithObstacles(grid, row, col + 1, memo);
  const downPaths = uniquePathsWithObstacles(grid, row + 1, col, memo);

  memo[pos] = rightPaths + downPaths;
  return memo[pos];

};


const obstacleGrid = [[0,1],[0,0]];

console.log(uniquePathsWithObstacles(obstacleGrid))