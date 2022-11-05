# Функция forEach

## Функция обходит любой Iterable объект любого размера. Работа функции не вызывает фризов. Функция возвращает Promise.
Таймаут между итерациями 100мс (для работы функции) + 100мс пауза для работы системы, всего 200мс

принимает на вход:
объект
колбек
параметры

```js
let total = 0;

forEach(new Array(50e7), () => {
  total++;
  console.log("i", total)
}, options).then(() => console.log("finish"))
  .catch((err) => console.log(err));

console.log(total);
```

## Дополнительные модули

### Scheduler

```js
Scheduler.init({timer: 80, delay: 30 });
```

### TaskWorker



## Потмер запуска нескольких экземпляров функции

Несколько таких вызовов гарантировано не вызывали фризов, т.к. каждая итерация вызываетсся последовательно. Все функции выполняются последовательно по-очереди.

```js
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

### Возможность задачи приоритетов

```js
let total = 0;

forEach(new Array(50e9), {priority: 'critical'}, () => {
  total++;
});

forEach(new Array(50e9), {priority: 'high'}, () => {
  total++;
});

forEach(new Array(50e9), {priority: 'low'}, () => {
  total++;
});

forEach(new Array(50e9), () => {
  total++;
});

forEach(new Array(50e9), () => {
  total++;
});

console.log(total);
```