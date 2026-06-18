class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(fruit) {
        const rows = fruit.length;
        const cols = fruit[0].length;
        let fresh = 0; 
        let minute = 0;
        const q = [];

        //find all the rotten orrage and fresh fruites

        for(let r = 0; r<rows; r++){
            for(let c= 0; c<cols; c++){
                if(fruit[r][c]===2){
                    q.push([r, c]);
                }
                if(fruit[r][c]===1){
                    fresh++;
                }
            }
        }

        const directions = [
            [1,0], //up
            [-1,0], //dowm
            [0,1], //right
            [0,-1] //left
        ]
       
       while(q.length && fresh > 0){
        const size = q.length;
        for(let  i= 0; i<size; i++){
            const [row, col] = q.shift();
        for(const [dr,dc] of directions){
            const nr = row + dr;
            const nc = col+ dc;
            if( nr < 0 || nr >=rows || nc < 0 || nc>=cols){
                continue;
            }

            if (fruit[nr][nc] !== 1) continue;

            fruit[nr][nc]=2;
                fresh--;
        

            q.push([nr,nc])
        }
        }
        minute++;
       }
       return fresh === 0 ? minute : -1; 

    }
}
