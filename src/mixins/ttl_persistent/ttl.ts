import { DataCache } from "oop-basic/cache/interface";

export function ttl(cache: DataCache, time: number){
  let proto = Object.getPrototypeOf(cache);
  let setFunc = proto.set;

  Object.assign(proto, {
    set(key:string | number ,value: any) {
      setFunc.bind(cache)(key,value);
      setTimeout(() => {
        proto.remove.bind(cache)(key);
      }, time)
    }
  });

  return cache;
}
