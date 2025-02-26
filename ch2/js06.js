console.log(this) // 指上下文

var name = '全局名'

const person={
    name:'张三',
    age:18,
    sayHello:function(){
        console.log(this)
        console.log(`Hello, my name is ${this.name}`)
    }
    //  箭头函数不改变 this 指向
    // sayHello: () => {
    //     console.log(this)
    //     console.log(`Hello, my name is ${this.name}`)
    // }
}

person.name = '李四'

// let sayHello = person.sayHello
let sayHello = person.sayHello.bind(person)

// 谁调用这个函数，this 就指向谁
sayHello() // 输出全局名
