import fetch from "node-fetch";

type Params = {
  method: "GET" | "POST" | "HEAD" | "PUT";
  body: any | null | undefined,
  responseType: "text" | "json" | "formData" | "blob" | "arrayBuffer",
}

export function fetchEngine(url: string, params: Params): Promise<void> {
  return new Promise((resolve: Function, reject: Function) => {
    if (params.method === "GET" || params.method === "HEAD" || !params.method) {
      delete params.body
    }
    console.log(params)

    fetch(url, params)
    .then(response => {
      resolve(response[params.responseType]());
    })
    .catch(e => reject(e))
  });
}
