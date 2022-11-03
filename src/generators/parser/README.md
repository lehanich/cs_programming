# Потоковый парсер чисел на основе генератора

Инициализируется генератор. В next() на каждой итерации отправляестя строка (часть цифры). Метод return() возвратит чистло

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
