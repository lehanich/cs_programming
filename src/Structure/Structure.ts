// Структура на основе массива

import {
  Structure as IStructure,
  StructureItem
} from "../interface";

export default class Structure<T> implements IStructure<T> {
  protected keys: string[];
  protected data?: StructureItem<T>[];

  protected funcData?: string;
  protected funcSwitch?: string;

  constructor(keys: string[]) {
    this.keys = new Array(...keys);
    this.data = new Array(this.keys.length);
  }

  get(key: string): StructureItem<T> {
    return <StructureItem<T>>this.#generateFunction2(key);
  };

  set(key: string, value: StructureItem<T>): void {
    const index:number = this.keys.findIndex((el) => el === key);
    this.data![index] = value;

    this.#arrayText(); // generate array
    this.#switchText(); // generate switch
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
}
