class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let rev = 0;

        while (x !== 0) {
            const lastDigit = x % 10;

            rev = rev * 10 + lastDigit;

            x = Math.trunc(x / 10);
        }

        const INT_MIN = -(2 ** 31);
        const INT_MAX = (2 ** 31) - 1;

        if (rev > INT_MAX || rev < INT_MIN) {
            return 0;
        }

        return rev;
    }
}