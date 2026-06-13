class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // Make sure nums1 is the smaller array
        if (nums1.length > nums2.length) {
            // Call the method on this instance
            return this.findMedianSortedArrays(nums2, nums1);
        }

        const m = nums1.length;
        const n = nums2.length;

        const totalLength = m + n;
        const half = Math.floor((totalLength + 1) / 2);

        let left = 0;
        let right = m;

        while (left <= right) {
            // i = how many elements from nums1 go to the left half
            const i = Math.floor((left + right) / 2);
            // j = how many elements from nums2 go to the left half
            const j = half - i;

            // Borders on nums1
            const nums1LeftMax  = (i === 0) ? -Infinity : nums1[i - 1];
            const nums1RightMin = (i === m) ?  Infinity : nums1[i];

            // Borders on nums2
            const nums2LeftMax  = (j === 0) ? -Infinity : nums2[j - 1];
            const nums2RightMin = (j === n) ?  Infinity : nums2[j];

            // Check if we have a correct partition
            if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
                // Odd total length → median is max of left side
                if (totalLength % 2 === 1) {
                    return Math.max(nums1LeftMax, nums2LeftMax);
                } else {
                    // Even total length → average of maxLeft and minRight
                    const maxLeft = Math.max(nums1LeftMax, nums2LeftMax);
                    const minRight = Math.min(nums1RightMin, nums2RightMin);
                    return (maxLeft + minRight) / 2;
                }
            }
            // Too many taken from nums1 → move partition left
            else if (nums1LeftMax > nums2RightMin) {
                right = i - 1;
            }
            // Too few taken from nums1 → move partition right
            else {
                left = i + 1;
            }
        }

        // Should not reach here for valid inputs
        return 0;
    }
}
