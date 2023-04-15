
import { Request } from "./oop-basic/Request";
import { MRUCache, LRUCache } from "./oop-basic/cache/";
import { xhr, fetchEngine } from "./oop-basic/strategy";
import { ttl } from "./mixins/ttl_persistent/ttl";

// let request = new Request();

// request
//   .using(fetchEngine)
//   .cache(new LRUCache(15))
//   .url("https://demo.unistar.ru/SkinFiles/demo.unistar.ru/basic/test.json")
//   .get
//   .json
//   .body({})
//   .create()
//   .then((res) => console.log(res))
//   .then(console.log);

const lruCache = ttl(new LRUCache(10), 1000);
   
   // Через 1000 мс данные из кеша удаляться
   lruCache.set("test", 123);
   console.log("read", lruCache.read("test"));

   setTimeout(() => console.log("read after 2sec", lruCache.read("test")), 2000)