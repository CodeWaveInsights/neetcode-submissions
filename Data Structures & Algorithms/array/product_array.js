//Input: arr[] = [10, 3, 5, 6, 2] 
//Output: prod[] = [180, 600, 360, 300, 900]

function productArray(arr) {
    let n = arr.length;
    let res = new Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if (i != j) {
                res[i] *= arr[j];   
            }   
     }
   }
   return res;
}

let arr = [10, 3, 5, 6, 2];
console.log(productArray(arr)); //Output: [180, 600, 360, 300, 900]

//Time Complexity: O(n^2)
//Auxiliary Space: O(n)
// [Better approach] Using Prefix and Suffix Array - O(n) Time and O(n) Space
// //Input: arr[] = [10, 3, 5, 6, 2] 
 function productArrayOptimized(arr) {
    let n = arr.length;
    let res = new Array(n).fill(1);
    let prefix = new Array(n).fill(1);
    let suffix = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * arr[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * arr[i + 1];
    }

    for (let i = 0; i < n; i++) {
        res[i] = prefix[i] * suffix[i];
    }

    return res;
}

let arrOptimized = [10, 3, 5, 6, 2];
console.log(productArrayOptimized(arrOptimized)); //Output: [180, 600, 360, 300, 900]

//Time Complexity: O(n) and Auxiliary Space: O(1)
function productArrayOptimizedInPlace(arr) {
    let n = arr.length;
    let result = new Array(n).fill(1);

    let prefix = 1;
    for(let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= arr[i];
    }

    let suffix = 1;
    for(let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= arr[i];
    }
    return result;
}

let arrInPlace = [1, 2, 5, 6, 2];
console.log(productArrayOptimizedInPlace(arrInPlace)); //Output: [120, 60, 24, 20, 60]