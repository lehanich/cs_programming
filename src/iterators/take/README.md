## Функция take

Принимает любой Iterable объект и возвращает итератор по заданному количеству его элементов. 

```js
const randomInt = random(0, 100);

console.log([...take(randomInt, 15)]);
```