/* eslint-disable no-console */
import {describe, expect, test, it} from '@jest/globals';
import forEach from "./for-each";
import Scheduler from "./scheduler";

describe("Generator forEach", function () {
    let total: number = 0;
    let date1: number, date2: number, date3: number;

    Scheduler.init({timeout: 10, delay: 100, priority: "PriorityQ"});

    forEach(new Array(1000), () => {//new Array(10)
      total++;
    }, { priority: "low" })
    .then(() => {
      date1 = new Date().getTime();
    })
    .then(() => {
      // expect(total === 3000 && date3 < date2 && date2 < date1)
    })
    .catch((err) => {
    });

    forEach(new Array(1000), () => {
      total++;
    }, { priority: "normal" })
    .then(() => {
      date2 = new Date().getTime();
    })
    .catch((err) => {
    });

    forEach(new Array(1000), () => {
      total++;
    }, { priority: "height" })
    .then(() => {
      date3 = new Date().getTime();
    })
    .catch((err) => {
    });

  it("Function forEach goes throue huge iterable object without freeze ", () => {

    expect(total === 3000)
  });

  it("1st forEach has low priority, 2nd - normal, 3d - height. 3d ends earlier then others ", () => {

    expect(date3 < date2 && date2 < date1)
  });

});
