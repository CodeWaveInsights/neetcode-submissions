class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

      function hoursNeeded(speed) {
        let hours = 0;
        for (const pile of piles) {
            hours += Math.floor((pile + speed - 1) / speed);
        }
        return hours;
    }

        let left = 1;
        let right = Math.max(...piles);

        while(left <=right){
            const mid =Math.floor((left+right)/2);
            const time = hoursNeeded(mid);

            if(time <=h){
                right =mid-1;
            }else{
                left = mid+1;
            }
        }
        return left;
    }
}
