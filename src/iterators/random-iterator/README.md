## Итератор для генерации случайных чисел по заданным параметрам

Функция random принимает на фходе два аргумента: минимальное и максимальное число. Числа генерируются случайным образов в заданном диапазоне. Количество обращений next() не ограничено.

```js
const randomInt = random(0, 100);

console.log(randomInt.next());
console.log(randomInt.next());
console.log(randomInt.next());
console.log(randomInt.next());
```
