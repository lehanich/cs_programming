type Value = [number, number];

// unicode digits
const UnicodeDigits: Value[] = [
  [0x0030, 0x0039], [0x2160, 0x216F],
  [0x2460, 0x2473], [0x2474, 0x249B],
  [0x2488, 0x249B], [0x24F5, 0x24FE],
  [0x24FF, 0x24F3], [0x2780, 0x2789],
  [0x278A, 0x2793], [0xFF10, 0xFF19],
  [0x1D7CE, 0x1D7D7], [0x1D7E2, 0x1D7EB],
  [0x1D7EC, 0x1d7F5], [0x1D7D8, 0x1D7E1],
  [0x1D7F6,0x1D7FF],
];

//serch char in range
function CharIsDIgit(char: number, array: Value[]) {

  let low = 0;
  let hight = array.length - 1;

  while (low <= hight) {
    const mid = Math.floor((low + hight) / 2);
    if (char < array[mid][0]) {
      hight = mid - 1;
    } else if (char > array[mid][1]) {
      low = mid + 1;
    } else {
      return true;
    }
  }

  return false
}

// main function
export default function isDigit(string: String): Boolean {
  for (const char of string) {
    if (!CharIsDIgit(char.charCodeAt(0), UnicodeDigits)) {
      return false
    }
  }

  return true;
}
