class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];

        for(let i=0; i<position.length; i++){
            cars.push([position[i], speed[i]]); //[[1,2],[4,2]]
        }
        //sort card by position in descending order
        cars.sort((a,b)=>b[0]-a[0]);

        let fleets = 0;
        let currentMaxTime = 0; 

        //Traverse from car closet to target to farthest

        for(let i = 0; i<cars.length; i++){
            const carPosition = cars[i][0];
            const carSpeed = cars[i][1];
        //Time this car takes ti reach the target
        const timeToTarget = (target-carPosition)/carSpeed;

        if(timeToTarget >currentMaxTime){
            fleets +=1;
            currentMaxTime = timeToTarget;
        }
        }
        return fleets;
    }
}
