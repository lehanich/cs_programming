type T = any;

export default function timeout(promise: any, timeout: number): Promise<T> {
  let sleep: Promise<T> = new Promise((resolve,reject) => {
    setTimeout(reject, timeout);
  });

  return Promise.race([sleep, promise]);
}

// import sleep from "acync-programs/sleep/sleep";
// const timeout2 = (ms, p) =  Promise.race([p, sleep(ms).then(() => {throw "timeout";})])
