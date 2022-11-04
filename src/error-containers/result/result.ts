type Data<T> = T ;
type Err<T> = Error

export default class Result<T>  {

  isError: Boolean = false;
  data?: Data<T>;
  error?: Err<T> | undefined;

  constructor(data: () => Data<T> | Err<T>) {
    try {
      const d = data();

      if (d instanceof Result) {
        this.isError = d.isError;

        if (!this.isError) {
          this.data = d.unwrap();
        }
      } else if (d instanceof Error) {
        this.isError = true;
        this.error = <Err<T>>d;
      } else {
        this.data = <T>d;
        this.isError = false;
      }
    } catch (e:any) {
      this.isError = true;
      this.error = new Error(e)
      this.data = undefined;
    }
  }

  unwrap(): T | Err<T> {
    if (this.isError) {
      return <Err<T>>this.error;
    }

    if (!this.data) {
      throw new Error("Empty")
    }

    return this.data!;
  }

  map(cb: (arg0: T) => any) {
    this.isError = false;
    return new Result(() => cb(<T>this.data) )
  }

  flatMap(cb: (el: T) => Result<T>): Result<T> {
    return new Result(() => cb(<T>this.data).unwrap())
  }

  static error(err: any) {
    return new Result(() => {
      throw err
    }) 
  }

  catch(cb: (err: T | Err<T>) => any) {
    return new Result(() => this.isError ? cb(<Err<T>>this.error) : <Data<T>>this.data)
  }

  status() {
    // return new Result(() => {
    return  this.isError ? "Error" : "OK"
    // })
  }
}
