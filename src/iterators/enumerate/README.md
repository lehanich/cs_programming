
## Функция enumerate

Принимает любой Iterable объект и возввращает итератор по парам (номер итерации, элемент)

```js
import random from "../random-iterator/random";
import enumerate from "./enumerate";

const randomInt = random(0, 100);

console.log([...enumerate(randomInt, 3)]); // [[0, ...], [1, ...], [2, ...]]
```
