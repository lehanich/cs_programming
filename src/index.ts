
import { Request } from "./oop-basic/Request";
import { MRUCache, LRUCache } from "./oop-basic/cache/";
import { xhr, fetchEngine } from "./oop-basic/strategy";

let request = new Request();

request
  .using(fetchEngine)
  .cache(new LRUCache(15))
  .url("https://demo.unistar.ru/SkinFiles/demo.unistar.ru/basic/test.json")
  .get
  .json
  .body({})
  .create()
  .then((res) => console.log(res))
  .then(console.log);
