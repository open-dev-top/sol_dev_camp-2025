// 案例：银行转账
function assert(condition, message) {
  if(!condition){
    throw new Error(message)
  }
}

function transfer(from, to, amount) {
  assert(typeof from === 'object', 'from 必须是对象')
  assert(typeof to === 'object', 'to 必须是对象')
  assert(typeof amount === 'number', 'number 必须是数字')

  assert('balance' in from,  'from 必须有 balance 属性')
  assert('balance' in to, 'to 必须有 balance 属性')

  assert(amount > 0, 'amount 必须是正数')
  assert(from.balance >= amount, '余额不足')

  from.balance -= amount;
  to.balance += amount;
}


const accountAlice = {
  name: 'Alice',
  balance: 100
}

const accountBob = {
  name: 'Bob',
  balance: 0
}

console.log("Before Transfer:")
console.log(`${accountAlice.name} 的余额是 ${accountAlice.balance}`)
console.log(`${accountBob.name} 的余额是 ${accountBob.balance}`)


transfer(accountAlice, accountBob, 100)

console.log("After Transfer:")
console.log(`${accountAlice.name} 的余额是 ${accountAlice.balance}`)
console.log(`${accountBob.name} 的余额是 ${accountBob.balance}`)
