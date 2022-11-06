# Автоматы и Генераторы

## Необходимо доработать функцию forEach, чтобы несколько таких вызовов гарантировано не вызывали фризов

```js
let total = 0;

forEach(new Array(50e9), () => {
  total++;
});

forEach(new Array(50e9), () => {
  total++;
});

forEach(new Array(50e9), () => {
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

## Необходимо доработать функцию forEach и добавить возможность задачи приоритетов

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

## Необходимо написать потоковый парсер чисел на основе генератора

```js
const parser = numberParser();

parser.next('-');   // {value: '-', done: false}
parser.next('14');  // {value: 14, done: false}
parser.next('.');   // {value: '.', done: false}
parser.next('53');  // {value: 53, done: false}
parser.next('e-');  // {value: 'e-', done: false}
parser.next('454'); // {value: 454, done: false}
parser.return();    // {value: -14.53e-454, done: true}
```
