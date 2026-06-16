class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if( !grid || grid.length === 0) return 0;

        let rows = grid.length;
        let cols = grid[0].length;
        let maxArea = 0;

        // area =1 + dfs(down)+dfs(up)+dfs(right)+dfs(left);

        function dfs(row, col){
            if( row < 0 || row >=rows || col <0 || col >= cols || grid[row][col]=== 0){
                return 0;
            }
          
          // visited islands
            grid [row][col] = 0;

            return (1+ dfs(row, col+1)+ dfs(row, col-1)+ dfs(row+1, col)+ dfs(row-1, col));
        }

        for(let row = 0; row< rows; row++){
            for(let col = 0; col < cols; col++){
                if(grid[row][col] === 1){
                    const area = dfs(row, col);
                    maxArea= Math.max(maxArea, area);

                }
            }
        }
        return maxArea;
    }
}
