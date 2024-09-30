"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxLengthUniqueChar = maxLengthUniqueChar;
function maxLengthUniqueChar(str) {
    var left = 0;
    var max = 0;
    var set = new Set();
    for (var right = 0; right < str.length; right++) {
        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }
        set.add(str[right]);
        max = Math.max(max, set.size);
    }
    return max;
}
