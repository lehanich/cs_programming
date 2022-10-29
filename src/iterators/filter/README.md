## Функция filter

Принимает любой Iterable объект и функцию-предикат. filter возвращает итератор по элементам которые удовлетворяют предикату.

```js
const randomInt = random(0, 100);

console.log([...take(filter(randomInt, (el) => el > 30), 15)]);
```
