type AnyFunction = (...args: any[]) => any;
type ThunkCb<T=any> = (error: any, data: any) => void;

export default function promisify<T extends AnyFunction>(
  cb: T
  ): Parameters<T> extends [...args: infer A, cb: infer C extends ThunkCb ] ? 
  (...args: A ) => Promise<C extends ThunkCb<infer D> ? D : never> : never
{
  return <any>((...args: any[]) =>  {
    return new Promise((resolve, reject) => {
      if (args.length !== cb.length - 1) {
        throw "Error";
      }
      cb (...args, (error: any, data: any) => {
        if (error != null) {
          reject(error);
        } else {
          resolve(data)
        }
      })
      // function callback(err: Error, result: unknown) {
      //   if (err) {
      //     reject(err);
      //   } else {
      //     resolve(result);
      //   }
      // }

      // args.push(callback);
      // // cb.call(this, ...args);
    })
  })
}

function readFile(file: string, cb: Function) {
  cb(null, 'fileContent');
}

// const readFilePromise = promisify(readFile);
// readFilePromise('my-file.txt').then(console.log).catch(console.error);


function sum(a: number, b: number, cb: (err: null, data: number) => void) {
  cb(null, a+b)
}

promisify(sum)(1,2).then((res) => {

})