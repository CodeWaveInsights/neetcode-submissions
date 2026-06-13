class MinStack {
    constructor() {
        this.stack = [];
        this.MinStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if(this.MinStack.length ===0 || val <=this.MinStack[this.MinStack.length-1]){
            this.MinStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const popValue = this.stack.pop();

        if(popValue === this.MinStack[this.MinStack.length-1]){
            this.MinStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
         return this.MinStack[this.MinStack.length-1];
    }
}
