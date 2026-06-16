class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if( !grid || grid.length===0 ) return 0;

        let rows = grid.length;
        let cols = grid[0].length;
        let islands = 0;

        function dfs(row, col){
            if(row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col]=== "0"){
                return;
            }

        // mark current land is vissited
         grid[row][col]= '0';
        
         // explore all the directions
         dfs(row+1, col);
         dfs(row-1, col);
         dfs(row, col+1);
         dfs(row, col-1)

        }

        for(let row = 0; row < rows; row++){
            for(let col =0; col < cols; col++){
                if(grid[row][col]==="1"){
                    islands++;
                    dfs(row, col);
                }
            }
        }
        return islands;
    }
}
