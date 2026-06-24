class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
   leastInterval(tasks, n) {

    const count = {};

    for (const task of tasks) {
        count[task] = (count[task] || 0) + 1;
    }

    let maxHeap = Object.values(count);

    maxHeap.sort((a, b) => b - a);

    const queue = [];

    let time = 0;

    while (maxHeap.length || queue.length) {

        time++;

        if (maxHeap.length) {

            maxHeap.sort((a, b) => b - a);

            let cnt = maxHeap.shift();

            cnt--;

            if (cnt > 0) {
                queue.push([cnt, time + n]);
            }
        }

        if (
            queue.length &&
            queue[0][1] === time
        ) {
            maxHeap.push(queue.shift()[0]);
        }
    }

    return time;
}
}
