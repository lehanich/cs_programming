
let myRegExp

export const latin_chars = /[a-zA-Z_$]/;

export const splitExp = /(?:\s)/;

export function format(string: string, data: any) {
  let myRegExp = /\$\{(\w+)\}/g;
  string = string.replace(myRegExp, function(str, $1) {
    return data[$1];
  })

  return string;
}

export function cleanRepeat(string: string) {
  let myRegExp = /(.{1,3}?)\1{1,}/g;

  return string.replace(myRegExp, replaceVal)
}

var replaceVal = function(x: any,$1: any) {
  return $1
};

export function calc(string: string) {
  var myRegExp = /\s[\d+\s\)\(+\-\*]+/gm;

  string = string.replace(myRegExp, function(str) {
    let func = new Function(`return ${str};`)
    return ` ${func()}\n`;
  })

  return  string;
}
