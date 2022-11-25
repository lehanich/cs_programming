type Params = {
  method: "GET" | "POST";
  body: any | null | undefined,
  responseType: XMLHttpRequestResponseType,
}

export function xhr(url: string, params: Params): Promise<void> {
  return new Promise((resolve: Function, reject: Function) => {
    var xhr = new XMLHttpRequest();
    xhr.open(params.method, url, false);
    xhr.responseType = params.responseType;
    xhr.timeout = 10000;
    xhr.onload = function() {
      resolve(xhr.response);
    }
    xhr.onerror = function() {
      reject("Error");
    }
    xhr.ontimeout = function() {
      reject("Time out");
    }
    xhr.send(params.body);
  });

    // xhr.onreadystatechange = function() { // (3)
    //   if (xhr.readyState != 4) return;
    
    //   button.innerHTML = 'Готово!';
    
    //   if (xhr.status != 200) {
    //     alert(xhr.status + ': ' + xhr.statusText);
    //   } else {
    //     alert(xhr.responseText);
    //   }
    
    // }
}
