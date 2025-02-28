export{}

function add<T>(a: T, b: T){
  console.log(a, b)
}

add<number>(1, 2)
add<string>('Hello', 'World')


function fn5<T, U>(a:T, b:U) : [T, U]{ // 返回 Tuple
  return [a, b]
}

fn5<number, string>(1, 'string')
