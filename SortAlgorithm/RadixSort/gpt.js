// Hàm hỗ trợ để tìm giá trị lớn nhất trong mảng
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Hàm sắp xếp Radix Sort
function radixSort(arr) {
  const max = getMax(arr);
  const maxLength = max.toString().length;

  for (let i = 0; i < maxLength; i++) {
    // Tạo các hộp (buckets) cho mỗi chữ số từ 0 đến 9
    const buckets = Array.from({ length: 10 }, () => []);

    // Đặt các phần tử vào các hộp tương ứng dựa trên chữ số ở vị trí i
    for (let j = 0; j < arr.length; j++) {
      const digit = Math.floor(arr[j] / Math.pow(10, i)) % 10;
      buckets[digit].push(arr[j]);
    }

    // Gộp các hộp thành một mảng
    arr = [].concat(...buckets);
  }

  return arr;
}

// Ví dụ sử dụng
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log("Mảng đã sắp xếp:", sortedArray);
