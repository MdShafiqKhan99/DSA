


const grid = [[3,2,1],[1,7,6],[2,7,7]];

const cols = [];
for (let j = 0; j < grid.length; j++) {
  for (let i = 0; i < grid.length; i++) {
    
    cols.push(grid[i][j])
  }
}

console.log(cols);