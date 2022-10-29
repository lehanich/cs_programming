## Функция take

Принимает любой Iterable объект и возвращает итератор по заданному количеству его элементов. 

```js
import random from "../random-iterator/random";
import take from "./take";

const randomInt = random(0, 100);

console.log([...take(randomInt, 15)]);
```