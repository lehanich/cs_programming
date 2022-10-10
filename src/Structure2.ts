// Структура на основе массива

import {
  Structure as IStructure,
  StructureItem
} from "./interface";

export default class Structure<T> implements IStructure<T> {
  protected keys: string[];
  protected data?: StructureItem<T>[];

  constructor(keys: string[]) {
    this.keys = new Array(...keys);
    this.data = new Array(this.keys.length);
  }

  get(key: string): StructureItem<T> {
    return <StructureItem<T>>this!.data![this.#functionGetKeyIndex(key)];
  };

  set(key: string, value: StructureItem<T>): void {
    this.data![this.#functionGetKeyIndex(key)] = value;
  };

  #functionGetKeyIndex(key: string): number {
    let newFunction = `switch(key) {`;

    this.keys.forEach((el, index) => {
      newFunction += `case '${el}': return ${index};`
    })

    newFunction += `default: throw console.error("error");}`;

    return new Function("key", newFunction)(key);
  }

  //Deprecated
  #generateFunction(key: string) {
    let newFunction = `console.log('test'); console.log(data); console.log(that.data); switch(key) {`;

    this.keys.forEach((el, index) => {
      newFunction += `case '${el}': return data[${index}];`
    })

    newFunction += `default: throw console.error("error");}`;

    return new Function("key", "data", newFunction)(key, this.data);
  }
}
