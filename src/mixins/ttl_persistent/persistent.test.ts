import {describe, expect, test} from '@jest/globals';
import { LRUCache } from '../../oop-basic/cache/';
import {persistent} from "./persistent";

describe("Decorators", function () {
  // it("persistent decorator set item to localStorage", () => {
  //   const lruCache = persistent(new LRUCache(10));

  //   // Через 1000 мс данные из кеша удаляться
  //   lruCache.set("test", 123); // set 123
  //   let value = lruCache.read("test"); // 123

  //   expect(lruCache.read("test") === "123");
  // });
});
