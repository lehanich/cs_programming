# Домашнее задание к лекции № 12 - ООП: базовые принципы и реализация в JS. Знакомство с TypeScript. Понятие интерфейса. ОО паттерны. Композиция и стратегия.

1. Реализовать классы для кеширования любых значений используя алгоритмы LRU, MRU и Never (заглушка).

   ```js
   const lruCache = new LRUCache(10);
   lruCache.set(ket, value);
   ```

2. Реализовать стратегии для отпраки данных через XMLHttpRequest и fetch в виде функций, который возвращают Promise.

   ```js
   const lruCache = xhr(url, params);
   ```

3. Реализовать классы Request и Response для создания запросов по заданным параметрам и обработки ответов. При создании запроса можно указать движок запроса и стратегию кеширования.

   ```js
   Request.using(fetchEngine).cache(new LRUCache(15)).post.json.body({}).create().then((res) => res.json()).then(console.log);
   ```
