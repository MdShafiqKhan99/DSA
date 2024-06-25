function minPathCost(grid, row = 0, col = 0, memo = {}){
  const pos = row + ',' + col;
  if(pos in memo) return memo[pos];

  // if out of bound
  if(
    row >= grid.length ||
    col >= grid[0].length
  ) {
    return Infinity
  }
  // check is arrived at the given position
  if(row === (grid.length - 1)  && col === (grid[0].length - 1) ){
    return grid[row][col]
  }

  const rightPathCost = minPathCost(grid, row, col + 1, memo);
  const downPathCost = minPathCost(grid, row + 1, col, memo);

  memo[pos] = grid[row][col] + Math.min(rightPathCost, downPathCost)
  return memo[pos];

}

function maxPathCost(grid, row = 0, col = 0, memo = {}){
  const pos = row + ',' + col;
  if(pos in memo) return memo[pos];

  // if out of bound
  if(
    row >= grid.length ||
    col >= grid[0].length
  ) {
    return -Infinity
  }
  // check is arrived at the given position
  if(row === (grid.length - 1)  && col === (grid[0].length - 1) ){
    return grid[row][col]
  }

  const rightPathCost = maxPathCost(grid, row, col + 1, memo);
  const downPathCost = maxPathCost(grid, row + 1, col, memo);

  memo[pos] = grid[row][col] + Math.max(rightPathCost, downPathCost)
  return memo[pos];

}