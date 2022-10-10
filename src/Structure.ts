// Структура на основе массива
import {
  Structure as IStructure,
  StructureItem
} from "./interface";

export default class Structure<T> implements IStructure<T> {
  protected keys: string[];
  protected data?: StructureItem<T>[];

  protected funcData?: string;
  protected funcSwitch?: string;

  constructor(keys: string[]) {
    this.keys = new Array(...keys);
    this.data = new Array(this.keys.length);
  }

  get(key: string): string | number {
    // 1st varian
    // return <string | number>this.generateFunction(key);

    return <string | number>this.#generateFunction2(key);
  };

  set(key: string, value: string | number): void {
    const index:number = this.keys.findIndex((el) => el === key);
    this.data![index] = value;
    this.#arrayText();
    this.#switchText();

    // 1st varian
    // this.data![this.functionGetKeyIndex(key)] = value;
  };

  #switchText() {
    this.funcSwitch = `switch(key) {`;
    this.keys.forEach((el, index) => {
      this.funcSwitch += `case '${el}': return data[${index}];`
    })
    this.funcSwitch += `default: throw console.error("error");}`;
  }

  #arrayText() {
    this.funcData = 'var data = [';
    this.data?.forEach((el, index) => {
      this.funcData += `
        ${typeof el === 'string' ? '\'' + el.toString() + '\'' : (typeof el === 'number' ? el.toString() : 'null')}
        ${index < this.keys.length - 1 ? ',' : ''}`;
    })
    this.funcData += '];';
  }

  #generateFunction2(key: string) {
    return new Function("key", `${this.funcData} ${this.funcSwitch}`)(key);
  }

  // 1st varian
  // Deprecated
  #generateFunction(key: string) {
    let newFunction = `console.log('test'); console.log(data); console.log(that.data); switch(key) {`;

    this.keys.forEach((el, index) => {
      newFunction += `case '${el}': return data[${index}];`
    })

    newFunction += `default: throw console.error("error");}`;

    return new Function("that", "key", "data", newFunction)(this, key, this.data);
  }

  // Deprecated
  #functionGetKeyIndex(key: string): number {
    let newFunction = `switch(key) {`;

    this.keys.forEach((el, index) => {
      newFunction += `case '${el}': return ${index};`
    })

    newFunction += `default: throw console.error("error");}`;

    return new Function("key", newFunction)(key);
  }
}
