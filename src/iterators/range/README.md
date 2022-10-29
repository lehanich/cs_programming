## Класс Range

Позволяет создавать диапазоны чисел или символов согласно Unicode. Метод reverce() позволяет обходить элементы Range в обратном порядке.

```js
import Range from "./range";

const symbolRange = new Range('a', 'f');

console.log(Array.from(symbolRange)); // ['a', 'b', 'c', 'd', 'e', 'f']
```

```js
import Range from "./range";

const numberRange = new Range(-5, 1);

console.log(Array.from(numberRange.reverse())); // [1, 0, -1, -2, -3, -4, -5]
```
