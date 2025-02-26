let obj1 = {
    name:'张三',
    age:18,
    gender:'男',
    say:() => {
        console.log("hello")
    }
}

// 对象访问
console.log(obj1.age)
console.log(obj1["name"])

// 对象添加或修改（原先是否有值）
obj1.address = '美国德州'
console.log(obj1)

// 对象删除
delete obj1.name
console.log(obj1)
