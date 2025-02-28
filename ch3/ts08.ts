export{}

type Person = {
  name: string;
  age: number;
  sleep(time: number): void
}

type Student = {
  readonly id: number;
  grade: number;
  class: string;
  games?: string[];
} & Person

// 鸭子类型；两个类型行为一样，则认为一致
// type 不像 interface 一样支持声明合并


// interface 只能是一个对象，type 可以是基本类型，like struct in Solidity
// type 可以是基础类型，也可以是联合类型
type IT = string 
type ITs = string | number
type ITst = [string | number]
// const it: ITst = [123, "123"] // This is wrong
const it1: ITst = ["123"] // 
const it2: ITst = [123] // 

type Status = "pending" | "success" | "failed"
const status: Status = 'pending'

// 字符串模板类型（重点在类型而不是规则）
type ETHAddress = `0x${string}`

type Data = `${number}-${number}-${number}`
const data: Data = '2024-01-01'
