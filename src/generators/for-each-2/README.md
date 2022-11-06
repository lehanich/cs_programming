# Функция forEach

Функция обходит любой Iterable объект любого размера. Работа функции не вызывает фризов. Функция возвращает Promise.

## Модуль состоит из:

### Scheduler - планировщик

Синглтон, который следит и запускает таски. Функция инициализации init на вход принимает объект с 
timeout - время выполнения очереди, delay - таймаут между очередями, priority - алгоритм прироитезации. Поддерживается "PriorityQ" - приоритетная очередь иначе по-умолчанию сработает "Vector" - очередь в порядке запуска функции forEach

### PriorityQ - простейщая прироритетная очередь.

Планировщик помещает таски в очередь на основании приоритета low, normal, height.

### TaskManager

управление конкретной функцией forEach (запуск итерации (run), ожидание (waiting))

### forEach

forEach(IterableObject, Callback, options) - функция forEach.
IterableObject - iterable объект
Callback - Функция, которая получает 3 параметра (i, item, array) => {}; i - индекс, item - значение текущего элемента, ссылка на итерируемый объект.
options - объект, поддерживается параметр priority со значением low, normal, height

### Описание

Таймаут между итерациями рассчитывает Scheduler на основании приоритетов. По формуле (timeout / длина_очереди) * time%

time% - 50% для height, 30% для normal, 20% для low

После каждого прохода приоритетной очереди, планировщик ждет delay мс

## Инициализация планировщика. 

```js
Scheduler.init({timeout: 10, delay: 100, priority: "PriorityQ"});
```

## Пример запуска функции forEach

```js
let total = 0;

  forEach(new Array(50e7), () => {
    total++;
    console.log("i", total)
  }, { priority: "low" })
  .then(() => console.log("finish"))
  .catch((err) => console.log(err));

console.log(total);
```

## Потмер запуска нескольких экземпляров функции

```js
import forEach from "./for-each";
import Scheduler from "./scheduler";

Scheduler.init({timeout: 10, delay: 100, priority: "PriorityQ"});

let total = 0;

forEach(new Array(50e7), () => {
  total++;
});

forEach(new Array(50e7), () => {
  total++;
});

forEach(new Array(50e7), () => {
  total++;
});

forEach(new Array(50e7), () => {
  total++;
});

forEach(new Array(50e7), () => {
  total++;
});

console.log(total);
```

### Возможность задавать приоритеты

```js
let total = 0;

forEach(new Array(50e9), { priority: 'critical' }, () => {
  total++;
});

forEach(new Array(50e9), { priority: 'high' }, () => {
  total++;
});

forEach(new Array(50e9), { priority: 'low' }, () => {
  total++;
});

console.log(total);
```
