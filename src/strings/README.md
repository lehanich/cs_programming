#Strings in JS

##isDigit

isDigit - function for checking if string is digit. It uses Unicode digit ranges

Example:
```js
console.log(isDigit('123')) // true
console.log(isDigit('Ⅻ'))  // true
console.log(isDigit('Ⅻx'))  // balse
```

##iter

function implemets iterator to string. It considers pairs in UTF-16. Emoji consists of 2 simbols

Example:
```js
console.log("\iter")
console.log([...iter("test")]);
console.log([...iter("😀")]);
console.log([...iter("👪")]);
console.log([...iter("💑")])
```
