import {describe, expect, it} from '@jest/globals';
import {  latin_chars,
          splitExp,
          format,
          cleanRepeat,
          calc } from "./index";

describe("RegEx expressions", function () {

  it("Check only latin chars, _, $ - false", () => {
    let test = latin_chars.test('привет');

    expect(test === false);
  });

  it("Check only latin chars, _, $ - false", () => {
    let test = latin_chars.test('hello_alex');

    expect(test === true);
  });

  it("Convert string to array. Chars for split . , ; ", () => {
    let array = 'foo    bla.bar,gd;4'.split(splitExp);

    expect(Array.isArray(array) && array[0] === "foo" && array.length === 5 && array[4] === "4" );
  });

  it("Format string: Change mask in string (like ${user}) to value from object (object.user)", () => {
    const object = { user: 'Bob', age: 10 };
    const res = format('Hello, ${user}! Your age is ${age}.', object);

    expect(res === "Hello, Bob! Your age is 10.");
  });

  it("Delete repeating chars 1", () => {
    const res = cleanRepeat("aaaabbbbczzzz");

    expect(res === "abcz");
  });

  it("Delete repeating chars 2", () => {
    const res = cleanRepeat("abababbbabcabc");

    expect(res === "abbabc");
  });

  it("Delete repeating chars 3", () => {
    const res = cleanRepeat("foofoobabaaaazze");

    expect(res === "foobaaze");
  });

  it("Exec all math expressions, and change by it`s own result", () => {
    const res = calc(`
    Какой-то текст (10 + 15 - 24) ** 2
    Еще какой то текст 2 * 10
    `)

    expect(/\s1\n/.test(res) && /\s20/.test(res));
  });

});
