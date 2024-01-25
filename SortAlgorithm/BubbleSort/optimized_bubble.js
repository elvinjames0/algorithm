// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
// nếu mảng gần như đã được sắp xếp
// đẩy số lớn nhất về cuối mảng

const result = bubbleSort([5, 1, 4, 2, 3]);
console.log("result: ", result);
/**
i = 5;
j < 4;
j = 3
 https://visualgo.net/en/sorting?slide=1
 */
