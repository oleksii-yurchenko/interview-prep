const arr = [101, 3, 6, 32, 4, 88, 5, 33, 87, 4, 6, 7, 12];

// sorted   [3, 4, 4, 5, 6, 6, 7, 12, 32, 33, 87, 88, 101]

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let middleIdx = Math.floor((arr.length - 1) / 2);
  let leftArr = [],
    rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === middleIdx) continue;
    arr[i] <= arr[middleIdx] ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
  }

  return [...quickSort(leftArr), arr[middleIdx], ...quickSort(rightArr)];
}

const result = quickSort(arr);

console.log(result);

module.exports = quickSort;
