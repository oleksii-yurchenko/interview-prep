const arr = [101, 3, 6, 32, 4, 88, 5, 33, 87, 4, 6, 7, 12];

function bubbleSort(arr) {
  let count = 0;
  while (count < arr.length - 1) {
    for (let i = 0; i < arr.length - 1 - count; i++) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
    count++;
  }
  return arr;
}

console.log(bubbleSort(arr));
