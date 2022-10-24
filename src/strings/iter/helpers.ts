
type CheckPair = { chars: string[], index: number, first: Boolean }
type CheckPairReturn = { string: string, index: number }

export function charHasPair (char: string): Boolean {
  let code = char.charCodeAt(0);
  
  code = code >> 11
  if (code === 0b11011) {
    return true;
  }

  return false
}

export function checkPair({chars, index, first}: CheckPair): CheckPairReturn {
  if (first) {
    let returnValue = "";
    let checkStart = chars[index].charCodeAt(0) >> 10

    if ((checkStart | 0b110111) !== checkStart && (index+1 < chars.length)) {
      returnValue += chars[index];

      let pair = checkPair({chars, index: index+1, first: false}); // recursive call if there`s more than 2 simbols

      returnValue += <string>pair.string;
      index = <number>pair.index
    }
    return {string: returnValue, index};
  }
  
  // 2nd simbol
  let char = chars[index].charCodeAt(0);
  let checkStart =  char >> 10

  return  (checkStart | 0b110111) === checkStart ?
          { string: chars[index], index: index++ } :
          { string: "", index: index }
}
