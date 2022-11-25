import { DataCache } from "../interface";

export class Never implements DataCache {
  set(key: string | number, value: any): void {
    
  }

  read(key: number | string): any {
    
  }
}