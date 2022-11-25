import {Request} from "./Request";
import { MRUCache, LRUCache } from "./cache/";
import { xhr, fetchEngine } from "./strategy";

let request = new Request();

request
  .using(fetchEngine)
  .cache(new LRUCache(15))
  .url("http://test.ru")
  .post
  .json
  .body({})
  .create()
  .then((res) => res.json())
  .then(console.log);
