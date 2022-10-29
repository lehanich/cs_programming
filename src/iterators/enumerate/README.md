
## Функция enumerate

Принимает любой Iterable объект и возввращает итератор по парам (номер итерации, элемент)

```js
const randomInt = random(0, 100);

console.log([...enumerate(randomInt, 3)]); // [[0, ...], [1, ...], [2, ...]]
```
