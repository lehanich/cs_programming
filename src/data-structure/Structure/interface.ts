export interface Structure<T> {
  get(key: string): StructureItem<T>;
  set(key: string, value: StructureItem<T>): void;
}

export type StructureItem<T> = number | string | null;
