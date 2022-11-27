class Trait2<T> {
  getQuack(q: number) {
    return q;
  }
}

interface DuckLike2 extends Trait<typeof Duckable> {}

@derive(Duckable)
class DuckLike2 implements Duckable {
  name: string = 'Bob';

  fly(): void {
    // Do some logic to fly
  }
}

/// 'QUACK!!!'
console.log(new DuckLike().getQuack(60));
