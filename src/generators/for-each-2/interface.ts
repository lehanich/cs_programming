
export type Priority = "low" | "normal"  |"height";
export type Worker = any;
export type WorkerContainer = [Priority, Worker];

export interface StrategyAdapter {
  insert(value: any, priority: Priority): void;
  remove(delWorker: Worker): void;
  peek(index: number): WorkerContainer;
  get length(): number;
}
