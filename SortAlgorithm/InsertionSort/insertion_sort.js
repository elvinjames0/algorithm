/*
[2,1,9,76,4];
[2,2,9,76,4];
[1,2,9,76,4];
[1,2,9,76,76];
[1,2,9,9,76];
[1,2,4,9,76];
lấy currentVal so sánh với từng số
nếu số đó lớn hơn currentVal thì đẩy số đó lên arr[j+1] = arr[j] không swap
sau đó lặp lại
*/

function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
const result = insertionSort([2, 1, 9, 76, 4]);
console.log("result: ", result);

function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
