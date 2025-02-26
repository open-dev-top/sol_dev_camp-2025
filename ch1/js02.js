let arr1 = [1, "string", false, null, undefined, ()=>{}, [[]]]

console.log(arr1[5])
console.log(arr1[6])
console.log(arr1[7]) // 越界

// 数组长度属性
let arrlen = arr1.length
console.log(arrlen)

// 数组方法（JS 很多）；函数是自定义的
let arr2 = [1, 2, 3, 4, 5]
// arr2.push("z") // 在数组末尾添加元素
// arr2.pop() // 移除数组末尾的元素
// arr2.unshift(-1) // 在数组首部添加元素
arr2.shift() // 移除数组首位的元素
console.log(arr2)

