## Функция forEach

обходит любой Iterable объект любого размера. Работа функции не вызывает фризов. Функция возвращает Promise.
Таймаут между итерациями 50мс

```js
let total = 0;

forEach(new Array(50e7), () => {
  total++;
  console.log("i", total)
}).then(() => console.log("finish"))
  .catch((err) => console.log(err));

console.log(total);
```
