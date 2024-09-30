// https://leetcode.com/problems/intersection-of-two-arrays/
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

let num1 = [1, 2, 2, 1];
let num2 = [2, 2];

let intersection = function (nums1, nums2) {
    const result = [];
    for (let i in nums1) {
        for (let j in nums2) {
            if ((nums2[j] === nums1[i]) && !result.includes(nums1[i])) result.push(nums2[j])
        }
    }
};

let intersection2 = function (nums1, nums2) {
    const temp = {}

    for (let item of nums1) {
        temp[item] = false;
    }

    for (let item of nums2) {
        if (temp[item] !== undefined) temp[item] = true;
    }

    console.log(JSON.stringify(temp))

    return Object.keys(temp).filter(key => temp[key] === true)
};

//console.log(intersection2(num1, num2));


strs = ['flower', 'flew', 'flight']
// Output: "fl"

let longestCommonPrefix = function (strs) {
    let result = '';
    let shift = 0;
    let flag = true;

    while (flag) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[i - 1][shift] === undefined) flag = false;
            if (strs[i][shift] !== strs[i - 1][shift]) return result
        }
        result = result.concat(strs[0][shift])
        shift++
    }
};


//console.log(longestCommonPrefix(strs));

const isPalindrome = function (x) {
    let i = 0;
    let count = x.length;

    while (count >= 1) {
        if (x[i] !== x[x.length - 1 - i]) return false
        count -= 2
        i++;
    }

    return true;

};

//console.log(isPalindrome('fueleuf'))