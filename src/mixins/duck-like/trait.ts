
interface AddSelf<T, R> {

}

abstract class Duckable {
  abstract name: string;
  abstract fly(): void;
  
  getQuack(size: number): string {
    throw 'Unimplemented!';
  }

  static getQuack: AddSelf<Duckable['getQuack'], Duckable> = (self, size: number) => {
    if (size < 10) {
      return 'quack!';
    }
 
    if (size < 20) {
      return 'quack!!!';
    }
 
    return 'QUACK!!!';
  };
}

abstract class Trait<T> extends Duckable {

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

function derive(duck: Duckable) {
  return (target: any) => {
    Object.assign(target.prototype, Duckable.prototype)
    return target
  };
}