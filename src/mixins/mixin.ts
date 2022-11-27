export function mixin(...objs: Object[]) {
  var newObj = objs[0];

  for (let i=1; i < objs.length; i++) {
    newObj = copy(newObj, objs[i]);
  }

  function copy(object1: any, object2: any) {
    for(let i=0; i < Object.keys(object2).length; i++){
      let key = Object.keys(object2)[i];

      if(typeof object2[key] === "object") {
        object1[key] = copy(object1[key],object2[key])
      } else {
        object1[key] = object2[key]
      }
    }
    return object1;
  }

  return newObj;
}