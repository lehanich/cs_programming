# data_structure

# Двусторонний двусвязанный связанный список
const list = LinkedList();

list.add(1);

list.add(2);

list.add(3);

console.log(list.first.value);           // 1

console.log(list.last.value);            // 3

console.log(list.first.next.value);      // 2

console.log(list.first.next.prev.value); // 1


# Связанный список итерируемый

const list = LinkedList();

list.add(1);

list.add(2);

list.add(3);


for (const value of list) {
  console.log(value);
}

# Очередь на основе связанного списка
const queue = Queue();

queue.push(10);

queue.push(11);

queue.push(12);


console.log(queue.head);  // 10

console.log(queue.pop()); // 10

console.log(queue.head);  // 11

console.log(queue.pop()); // 11

console.log(queue.pop()); // 12

console.log(queue.pop()); // Exception


# Двусторонняя очередь
push - записать в конец очереди
pop - взять из конца очереди
unshift - положить в начало очереди
shift - взять из начала очереди

const dequeue = Queue();

dequeue.push(10);

dequeue.unshift(11);

dequeue.push(12);

console.log(dequeue.pop());   // 12

console.log(dequeue.shift()); // 11

console.log(dequeue.pop());   // 10

console.log(dequeue.pop());   // Exception


# Стек на основе массива фиксированной длины
const stack = Stack();

stack.push(10);

stack.push(11);

stack.push(12);


console.log(stack.head);  // 12

console.log(stack.pop()); // 12

console.log(stack.head);  // 11

console.log(stack.pop()); // 11

console.log(stack.pop()); // 10

console.log(stack.pop()); // Exception


# Структура на основе массива
const jackBlack = Structure(['name', 'lastName', 'age']); // Определяются ключи структуры

// Ввводятся значения

jackBlack.set('name', 'Jack');

jackBlack.set('lastName', 'Black');

jackBlack.set('age', 53);


jackBlack.get('name') // 'Jack'

# Запуск

npm run start

npm test
