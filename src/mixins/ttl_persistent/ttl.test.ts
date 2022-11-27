import {describe, expect, test} from '@jest/globals';
import { LRUCache } from '../../oop-basic/cache/';
import {ttl} from "./ttl";

describe("Decorators", function () {
  it("ttl decorator remove item through 1 sec ", () => {
    const lruCache = ttl(new LRUCache(10), 1000);

    // Через 1000 мс данные из кеша удаляться
    lruCache.set("test", 123); // set 123
    let value = lruCache.read("test"); // 123

    setTimeout(() => {
      expect(lruCache.read("test") == null);
    }, 2000)
  });
});
