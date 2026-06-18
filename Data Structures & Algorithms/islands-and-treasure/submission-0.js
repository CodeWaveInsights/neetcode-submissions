class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {

        if(!grid || !grid.length) return;
        const rows = grid.length;
        const cols= grid[0].length;

        const queue =[];

        //add all the gates

        for(let row = 0; row <rows; row++){
            for(let col= 0; col <cols; col++){
                if(grid[row][col]===0){
                    queue.push([row, col]);
                }
            }
        }

        const directions = [
            [1,0], [-1,0],[0,1],[0,-1]
        ]

        while(queue.length){
            const [row, col]= queue.shift();

            for( const [dr, dc] of directions){
                const nr =row +dr;
                const nc = col + dc;

                const INF = 2147483647;

                     if (
                    nr < 0 ||
                    nr >= rows ||
                    nc < 0 ||
                    nc >= cols ||
                    grid[nr][nc] !== INF
                ) {
                    continue;
                }

                grid[nr][nc]=grid[row][col]+1;
                queue.push([nr,nc]);

            }
        }

    }
}
