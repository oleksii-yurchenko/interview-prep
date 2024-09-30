const arr = [3, 6, 32, 4, 5, 33, 87, 4, 6, 7];

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) return i;
  }
  return null;
}

console.log(linearSearch(arr, 7));
