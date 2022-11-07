import {describe, expect, test} from '@jest/globals';
import sleep from "./sleep";

describe("Async functions", function () {

  it("sleep waik", () => {
    let now1 = new Date().getTime();
    let timeout = 1000;

    sleep(timeout).then(() => {
      console.log(`I'am awake!`);
      let now2 = new Date().getTime();

      expect(now2 - now1 > timeout)
    });
  });
});
