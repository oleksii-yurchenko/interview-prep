const arr = [3, 6, 32, 4, 5, 33, 87, 4, 6, 7];

// O(n^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        arr[j] = arr[i];
        arr[i] = min;
      }
    }
  }

  return arr;
}

console.log(selectionSort(arr));

// withot useless swapping
// n + (n-1) + (n-2) + ... + 1
// n^2 - const
// O(n^2)
function selectionSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = j;
      }

      if (min != i) {
        let swap = arr[min];
        arr[min] = arr[i];
        arr[i] = swap;
      }
    }
  }
}

console.log(selectionSort2(arr));
