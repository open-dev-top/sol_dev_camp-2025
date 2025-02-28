export{}

let name1: string = "Hi"
const num: number = 1
var bool: boolean = false
console.log(name1, num, bool)


// 数组 js 有
// 元组和枚举 js 没有，ts 兼容 js，是超集，所以新的数据类型是原先模拟出来的
const arr1: string[] = ["1", "2", "3"]
const arr2: Array<string> = ["1", "2"]

const tuple: [string, number] = ["1", 1]
tuple[2] = "2"
console.log(tuple)

enum Color {
  Red,
  Green,
  Blue,
  Yellow
}

const color: Color = Color.Red
console.log(color)

// anyscript
let age: any = null
age = "123"

// null：可能有值，但现在没有
let nul:null = null;

// undefined：变量未被初始化
let un:void = undefined

// void：表示没有类型
function fn(): void{
  console.log("Hello, World!")
}

// never：不能存在的类型
function fn2(): never {
  throw new Error('error')
}
