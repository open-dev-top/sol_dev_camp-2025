// 泛型和接口
interface Pair<Key, Value>{
  key: Key;
  value: Value;
}

// 泛型和类
class Box<T>{
  value: T;
  constructor(value: T){
    this.value = value
  }  
}

const box = new Box<number>(1)

class Stack<T>{
  private items: T[] = [];
  push(item: T) {
    this.items.push(item)
  }
  pop(): T|undefined{
    return this.items.pop()
  }
}

const stack = new Stack<number>();
stack.push(1); // 先进
stack.push(2);
console.log(stack.pop())
console.log(stack.pop()) // 后出
