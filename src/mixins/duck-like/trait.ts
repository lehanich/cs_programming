
interface AddSelf<T, R> {

}

abstract class Duckable {
  abstract name: string;
  abstract fly(): void;
  
  getQuack(size: number): string {
    throw 'Unimplemented!';
  }

  static getQuack: AddSelf<Duckable['getQuack'], Duckable> = (self: any, size: number) => {
    if (size < 10) {
      return 'quack!';
    }
 
    if (size < 20) {
      return 'quack!!!';
    }
 
    return 'QUACK!!!';
  };
}

type Trait<F extends Function, P extends F['prototype'] = F['prototype']> = {
  [K in Extract <keyof F, keyof P>]: P[K]
}


interface DuckLike extends Trait<typeof Duckable> {}

@derive(Duckable)
class DuckLike implements Duckable {
  name: string = 'Bob';

  fly(): void {
    // Do some logic to fly
  }
}

/// 'QUACK!!!'
console.log(new DuckLike().getQuack(60));

function derive(duck: any) {
  return (target: any) => {
    Object.assign(target.prototype, Duckable.prototype)
    Object.getOwnPropertyNames(Test)
    
    return target
  };
}