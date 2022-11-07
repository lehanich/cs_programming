type T = any;

export default function timeout(promise: any, timeout: number): Promise<T> {
  let sleep: Promise<T> = new Promise((resolve,reject) => {
    setTimeout(reject, timeout);
  });
  return Promise.race([sleep, promise]);
}
