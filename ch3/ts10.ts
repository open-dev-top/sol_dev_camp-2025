export{}

// 类型推断
let num = 3
// num = "3"

let pair = { // 无法进行类型推断
  key: "1",
  value: 1
}

pair.key = "2"
pair.value = 2
