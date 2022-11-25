import { DataCache } from "./cache/interface";
import { Never } from "./cache/never/never";

type T = any;

export class Request<T> { // implements PromiseLike<T>

  protected cacheType: DataCache = new Never();
  protected requestFunc?: Function;
  protected data: {url: string, params: any} = {url: "", params: {}};

  constructor() {
    return this;
  }

  using(exec: Function) : Request<T> {
    this.requestFunc = exec;
    return this;
  }

  cache(cache: DataCache): Request<T> {
    this.cacheType = cache;

    return this;
  }

  url(url: string) : Request<T> {
    this.data.url = url;

    return this;
  }

  get get() : Request<T> {
    this.data.params.method = "GET";

    return this;
  }

  get post() : Request<T> {
    this.data.params.method = "POST";

    return this;
  }

  get json() : Request<T> {
    this.data.params.responseType = "json";
    return this;
  }

  get text() : Request<T> {
    this.data.params.responseType = "text";
    return this;
  }

  body(body: any) : Request<T> {
    this.data.params.body = body;

    return this;
  }

  create() : Promise<any> {
    if (this.data.params.method === "GET") {
      const data = this.cacheType.read(this.data.url);

      if (data) {
        return Promise.resolve(data);
      }
    }
    console.log("cache", this.data.url)
    console.log("1",this.cacheType.read(this.data.url))
    return this.requestFunc!(this.data.url, this.data.params).then((result: any) => { //new Promise((resolve) => 
      console.log("WRITE")
      console.log(result)
      this.cacheType.set(this.data.url, result);
      return result;
    })
    //);
  }

  // then(onFulfilled: any, onRejected: any): PromiseLike<any> {
  //   return new Promise((resolve, reject) => {
  //     resolve(1);
  //   })
  // }
}

// type getters = {
//   method: "GET" | "POST" | "HEAD" | "PUT";
//   body: any | null | undefined,
//   responseType: "text" | "json" | "formData" | "blob" | "arrayBuffer",
// }


// const returnedTarget = Object.assign(Request.prototype, Mixin);