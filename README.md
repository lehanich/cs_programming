# Базовые структуры данных

# Двусторонний двусвязанный связанный список
метод add

свойства first, last

ссылки next prev

Код:

const list = LinkedList();

list.add(1);

list.add(2);

list.add(3);

console.log(list.first.value);           // 1

console.log(list.last.value);            // 3

console.log(list.first.next.value);      // 2

console.log(list.first.next.prev.value); // 1


# Связанный список итерируемый
метод add

свойства first, last

ссылки next prev

Код:

const list = new LinkedList();

list.add(1);

list.add(2);

list.add(3);


for (const value of list) {
  console.log(value);
}

# Очередь на основе связанного списка
методы push pop

свойства head rear maxSize length


const queue = new Queue(3);

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
методы:

push - записать в конец очереди

pop - взять из конца очереди

unshift - положить в начало очереди

shift - взять из начала очереди

свойства head rear maxSize length


const dequeue = new Queue(3);

dequeue.push(10);

dequeue.unshift(11);

dequeue.push(12);

console.log(dequeue.pop());   // 12

console.log(dequeue.shift()); // 11

console.log(dequeue.pop());   // 10

console.log(dequeue.pop());   // Exception


# Стек на основе массива фиксированной длины

методы push pop

свойства head maxSize


const stack = new Stack(3);

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
new Structure(['name', 'lastName', 'age']) - в конструктор заодится массив полей

метод set('name', 'Jack') - записывает значение поля name

метод .get('name') - считывает значение поля name

const jackBlack = new Structure(['name', 'lastName', 'age']); // Определяются ключи структуры

// Ввводятся значения

jackBlack.set('name', 'Jack');

jackBlack.set('lastName', 'Black');

jackBlack.set('age', 53);


jackBlack.get('name') // 'Jack'

# Запуск

npm run start

npm test
