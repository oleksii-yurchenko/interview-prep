const arr = [
  3, 6, 12, 15, 15, 18, 23, 33, 33, 33, 37, 39, 41, 44, 55, 65, 77, 85,
];

//indexes    0  1  2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17

function binSearch2(arr, value) {
  let startIdx = 0;
  let endIdx = arr.length - 1;
  let middleIdx;

  while (endIdx >= startIdx) {
    middleIdx = Math.floor((startIdx + endIdx) / 2);
    if (value === arr[middleIdx]) return middleIdx;
    else
      value > arr[middleIdx]
        ? (startIdx = middleIdx + 1)
        : (endIdx = middleIdx - 1);
  }

  return null;
}

function binSearch3(arr, value, startIdx = 0, endIdx = arr.length - 1) {
  let middleIdx = Math.floor((startIdx + endIdx) / 2);
  if (startIdx > endIdx) return null;
  if (value === arr[middleIdx]) return middleIdx;
  return value > arr[middleIdx]
    ? binSearch(arr, value, middleIdx + 1, endIdx)
    : binSearch(arr, value, startIdx, middleIdx - 1);
}

console.log(binSearch4(arr, 41));
