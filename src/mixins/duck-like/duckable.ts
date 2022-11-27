abstract class Duckable2 {
  abstract name: string;
  abstract fly(): void;
  
  getQuack(size: number): string {
    throw 'Unimplemented!';
  }

  static getQuack: AddSelf2<Duckable['getQuack'], Duckable> = (self, size) => {
    if (size < 10) {
      return 'quack!';
    }
 
    if (size < 20) {
      return 'quack!!!';
    }
 
    return 'QUACK!!!';
  };
}
