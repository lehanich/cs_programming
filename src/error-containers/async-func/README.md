# Обработка ошибок. Простые и контейнерные типы данных. Функторы и монады.

Функция exec - аналог async/await для контейнера Result и Promise. Функция exec на входе принимает генератор. yield принимает контейнерный тип (Result или Promise). Каждая строчка yield срабатывает синхронно.

примеры использования:

```js
exec(function* main() {
  const result = new Result(() => 10);
  console.log(yield result.map((el) => el * 2));
});
```


```js
exec(function* main() {
  const result = new Result(() => 10);
  
  console.log(yield result.map((el) => el * 2));
  
  console.log(yield Promise.resolve(10));
});
```
