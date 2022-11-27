# Домашнее задание к лекции № 14 - Примеси, характеристики и декораторы. Паттерны создания объектов.

1. Реализовать функцию mixin, которая делает "глубокое" расширение объекта заданными миксинами.

   ```js
   // {a: {b: 42, c: 2, e: 7}, j: 2}
   mixin({a: {b: 1, c: 2}}, {a: {b: 42, e: 7}}, {j: 2})
   ```

2. Реализовать декораторы ttl (время жизни записи в кеше) и persistent (сохранять ключи в офлайн хранилище) для классов кеширования информации из лекции 12.

   ```js
   const lruCache = ttl(new LRUCache(10), 1000);
   
   // Через 1000 мс данные из кеша удаляться
   lruCache.set(ket, value);
   ```

3. Реализовать поддержку дефолтных реализаций для интерфейсов классов.

   ```typescript
   abstract class Duckable {
     abstract name: string;
     abstract fly(): void;
     
     getQuack(size: number): string {
       throw 'Unimplemented!';
     }

     static getQuack: AddSelf<Duckable['getQuack'], Duckable> = (self, size) => {
       if (size < 10) {
         return 'quack!';
       }
    
       if (size < 20) {
         return 'quack!!!';
       }
    
       return 'QUACK!!!';
     };
   }


   interface DuckLike extends Trait<typeof Duckable> {}
   
   @derive(Duckable)
   class DuckLike implements Duckable {
     name: string = 'Bob';
   
     fly(): void {
       // Do some logic to fly
     }
   }
   
   /// 'QUACK!!!'
   console.log(new DuckLike().getQuack(60));
   ```

4. Реализовать "строитель" для fetch запросов.

   ```js
   const myUrlReq = Fetch
     .method('POST')
     .url('//my-url');
   
   myUrlReq.query('a', 1)
     .query('b', 2)
     .body('application/json', {myData: 42})
     .send()
     .then(console.log);
   ```