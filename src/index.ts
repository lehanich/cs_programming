import LinkedList from "./LinkedList/LinkedList";
import Queue from "./Queue/Queue";
import DoubleQueue from "./DoubleQueue/DoubleQueue";
import Stack from "./Stack/Stack";
import Structure from "./Structure/Structure";
import DynamicArray from "./DynamicArray/DynamicArray";
import Vector from "./Vector/Vector";
import HashMap from "./HashMap/HashMap";
import binarySearch from "./BinarySearch/BinarySearch";
import BinaryTree from "./BinaryTree/BinaryTree";
import Tree234 from "./234-tree/234Tree";
import BTree from "./b-tree/BTree";
import isDigit from "./strings/isDigit/isDigit";
import iter from "./strings/iter/iter";
import random from "./iterators/random-iterator/random";
import take from "./iterators/take/take";
import filter from "./iterators/filter/filter";
import enumerate from "./iterators/enumerate/enumerate";
import Range from "./iterators/range/range";
import seq from "./iterators/seq/seq";
import zip from "./iterators/zip/zip";

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);

console.log("Связанные список");
console.log(list.first?.value);           // 1
console.log(list.last?.value);            // 3
console.log(list.first?.next?.value);     // 2
console.log(list.first?.next?.prev?.value);

console.log("Итерируемый список");
for (const value of list) {
  console.log(value);
}

console.log("Очередь на основе связанного списка");

const queue = new Queue(4);

queue.push(10);
queue.push(11);
queue.push(12);

console.log(queue.head?.value);  // 10

console.log(queue.pop()); // 10

console.log(queue.head?.value);  // 11

console.log(queue.pop()); // 11
console.log(queue.pop()); // 12
// console.log(queue.pop()); // Exception

// console.log("Двусторонняя очередь");

// const dequeue = new DoubleQueue(3);

// dequeue.push(10);
// dequeue.unshift(11);
// dequeue.push(12);

// console.log("тест данных");
// for (const value of dequeue) {
//   console.log(value);
// }

// console.log(dequeue.pop());   // 12
// console.log(dequeue.shift()); // 11
// console.log(dequeue.pop());   // 10
// console.log(dequeue.pop());   // Exception

// console.log("Стек");

// const stack = new Stack(3);

// stack.push(10);
// stack.push(11);
// stack.push(12);

// console.log(stack.head);  // 12

// console.log(stack.pop()); // 12

// console.log(stack.head);  // 11

// console.log(stack.pop()); // 11
// console.log(stack.pop()); // 10
// // console.log(stack.pop()); // Exception

// console.log("Структура");

// const jackBlack = new Structure(['name', 'lastName', 'age']);

// jackBlack.set('name', 'Jack');
// jackBlack.set('lastName', 'Black');
// jackBlack.set('age', 53);

// console.log(jackBlack.get('name')); // 'Jack'

// const list2 = new LinkedList();

// list2.add(new Array(2));
// console.log(list2)


console.log("Динамический массив");

const arr = new DynamicArray(3); // Размер фиксированного массива в списке 

arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.add(5);
console.log("5", arr.length, arr.print())

console.log(arr.length);   // 4

console.log(arr.get(0));  // 1
console.log(arr.get(1));  // 2
console.log(arr.get(4));  // 5
console.log(arr.get(4));
console.log(arr.print());

console.log("check iterable");
for (const value of arr) {
  console.log("$",value);
}

// const list2 = new LinkedList();

// list2.add(new Array(1,2,3));
// list2.add(new Array(5,6,7));

// for (const value of list2) {
//     console.log("iterator", value);
//   }
console.log("check vector");
const arr_v = new Vector(2);

arr_v.add(1);
arr_v.add(2);
arr_v.add(3);
arr_v.add(4);
arr_v.add(5);

console.log(arr_v.get(0));  // 1
console.log(arr_v.get(1));  // 2
console.log(arr_v.get(4));  // 5
arr_v.remove(3)
console.log(arr_v.get(3));

console.log("check hash table");
const map = new HashMap(20);

map.set('foo', 'bar');
map.set(10, 'bla');
map.set(10, 'bla2');

console.log(map.get('foo')); // 'bar'
console.log(map.get(10));    // 'bla'

console.log([...map.keys()]); // ['foo', '10']

console.log("Binary search");
console.log(binarySearch(4, [-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98])); // 8 - это индекс 

console.log("Binary tree");
// const treeSet = BinaryTree([-432, 0, 1, 1, 2, 2, 2, 3, 4, 5, 6, 98]);
const treeSet = new BinaryTree([5,2,1,3,7,6,8]);

console.log(treeSet.print());
console.log(treeSet.has(53)); // false
console.log(treeSet.has(7)); // true
console.log(treeSet.find(8)); // true

// console.log("\n234-tree");

// const tree = new Tree234();

// tree.insert(1);
// tree.insert(2);
// tree.insert(3);
// tree.insert(4);
// tree.insert(5);
// tree.insert(6);
// tree.insert(7);
// tree.insert(8);
// tree.insert(9);
// tree.insert(10);
// tree.insert(11);

// tree.print();

console.log("\b-tree");
const btree = new BTree();

btree.insert(1);
btree.insert(2);
btree.insert(3);
btree.insert(4);
// console.log("\n start insert 5");
btree.insert(5);
btree.insert(6);
btree.insert(7);
btree.insert(8);
btree.insert(9);
console.log("\n start insert 10");
btree.insert(10);
console.log("\nfinal print:")
btree.print();
// tree.set('foo', 'bar');
// tree.set(10, 'bla');

// console.log(tree.get('foo')); // 'bar'
// console.log(tree.get(10));    // 'bla'

console.log("\nStrings")
console.log(isDigit('123')) // true
console.log(isDigit('Ⅻ'))  // true
console.log(isDigit('Ⅻx'))  // balse

console.log("\niter")
console.log([...iter("test")]);
console.log([...iter("😀")]);
console.log([...iter("👪")]);
console.log([...iter("💑")])

const randomInt: IterableIterator<Object> = random(0, 100);
// console.dir(randomInt)
console.log(randomInt.next());
console.log(randomInt.next());
console.log(randomInt.next());
console.log(randomInt.next());

console.log("2-", [...take(randomInt, 5)]);

console.log("3-",[...take(filter(randomInt, (el: number) => el > 30), 15)]);

console.log("4-", [...enumerate(randomInt, 5)]);

console.log("5-");
const symbolRange = new Range('a', 'f');

console.log(Array.from(symbolRange)); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(Array.from(symbolRange.reverse()));

const numberRange = new Range(-5, 1);

console.log(Array.from(numberRange));

console.log(Array.from(numberRange.reverse())); // [1, 0, -1, -2, -3, -4, -5]

console.log("6-");
// console.dir([1,2][Symbol.iterator]())
// for (let el of new Set([3, 4])) {
//   console.log("final el ", el)
// }

// for (let el of seq([1, 2], new Set([3, 4]), 'bla')) {
//   console.log("final el ", el)
// }
console.log([...seq([1, 2], new Set([3, 4]), 'bla')]); 

console.log("7-");
console.log(...zip([1, 2], new Set([3, 4]), 'bl'));