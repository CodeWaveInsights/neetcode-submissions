class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    findKthLargest(nums, k) {
        const heap = new minHeap();

        for(let num of nums){
            heap.insert(num);

            if(heap.heap.length > k){
                heap.extractMin()
            }
        }
        return heap.heap[0];
    }
}

class minHeap{
    constructor(){
        this.heap = [];
    }

    getParent(i){
        return Math.floor((i-1)/2);
    }

    getLeft(i){
        return 2 * i + 1;
    }

    getRight(i){
        return 2 * i + 2;
    }

    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(val){
        this.heap.push(val);

        let index = this.heap.length-1;

        while(index >0 && this.heap[index] < this.heap[this.getParent(index)]){
            this.swap(index, this.getParent(index));
            index = this.getParent(index);
        }
    }

      extractMin() {
             if(this.heap.length ===0) return null;

              if(this.heap.length === 1) return this.heap.pop();

              const min = this.heap[0];

              this.heap[0] = this.heap.pop();

              this.heapifyDown(0);

              return min;
    }
    
      heapifyDown(i){
        let smallest = i;
        const left = this.getLeft(i);
        const right = this.getRight(i);

        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left;
        }

        if(right <this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right;
        }

        if(smallest !== i){
            this.swap(i, smallest);
            this.heapifyDown(smallest);
        }
    }
}
