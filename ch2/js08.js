// 用 JS 实现 assert
function assert(condition, message) {
  if(!condition){
    throw new Error(message)
  }
}

assert(1 === 2, '1 不等于 2')
