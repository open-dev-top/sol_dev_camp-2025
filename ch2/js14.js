let obj = {};
let obj2 = new Object();

function Cat() {}
let cat = new Cat();

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {}
  sleep() {}
}

const cat2 = new Animal("小猫");
cat2.eat();
cat2.sleep();

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}
