import {describe, expect, it} from '@jest/globals';
import numberParser from "./numberParser";

describe("Generators (numberParser)", function () {

  it("Stream parsef number from string", () => {
    const parser = numberParser();

    parser.next('-');
    parser.next('14');
    parser.next('.');
    parser.next('53');
    parser.next('e-');
    parser.next('454');

    let result:any = parser.return();

    expect(result === -0.001453);
  });

  it("Stream parsef number with error 1", () => {
    const parser = numberParser();

    expect(() => parser.next('--')).toThrow(SyntaxError);
  });

  it("Stream parsef number with error 2", () => {
    const parser = numberParser();

    parser.next('-');
    parser.next('14');

    expect(() => parser.next('a')).toThrow(SyntaxError);
  });
  it("Stream parsef number with error 2", () => {
    const parser = numberParser();

    parser.next('-');
    parser.next('14');

    expect(() => parser.next('..')).toThrow(SyntaxError);
  });
});
