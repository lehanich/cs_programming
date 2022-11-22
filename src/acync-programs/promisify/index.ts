export default function promisify(cb: Function): Function {
  return (...args: any[]) => {
    return new Promise((resolve, reject) => {
      function callback(err: Error, result: unknown) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback);
      // cb.call(this, ...args);
    })
  }
}

function readFile(file: string, cb: Function) {
  cb(null, 'fileContent');
}

const readFilePromise = promisify(readFile);
readFilePromise('my-file.txt').then(console.log).catch(console.error);
