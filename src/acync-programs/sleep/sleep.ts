
export default function sleep(timeout: number): Promise<any> {
  return new Promise((resolve,reject) => {
    setTimeout(resolve, timeout);
  }).catch((err) => console.log("error"))
}
