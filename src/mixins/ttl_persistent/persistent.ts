import { DataCache } from "oop-basic/cache/interface";

export function persistent(cache: DataCache){
  let proto = Object.getPrototypeOf(cache);
  let setFunc = proto.set;

  Object.assign(proto, {
    set(key:string | number ,value: any) {
      setFunc.bind(cache)(key,value);
      localStorage.setItem(key.toString(), value.toString());
    }
  });

  return cache;
}
