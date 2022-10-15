
export default function binarySearch(value: number | string, array: number[]) {
  let low = 0;
  let hight = array.length - 1;

  while (low <= hight) {
    const mid = Math.floor((low + hight) / 2);
    if (value < array[mid]) {
      hight = mid - 1;
    } else if (value > array[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}
