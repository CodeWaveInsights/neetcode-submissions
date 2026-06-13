class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for(let token of tokens){

            if(token === "+" || token ==="-" || token ==="*" || token==="/"){
                const b = stack.pop();
                const a = stack.pop();
                let result;

                if(token === "+") result = a+b;
               else if(token === "-") result = a-b;
               else if(token === "*") result = a*b;
               else if(token === "/") result = Math.trunc(a/b);

               stack.push(result);
            }else{
                const number = parseInt(token, 10);
                stack.push(number);
            }
        }
        // At the end, the stack should have exactly one element: the final result
        return stack.pop();
    }
}
