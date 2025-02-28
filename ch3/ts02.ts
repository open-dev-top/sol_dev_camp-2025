export {};

// 函数签名
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// 函数实现
function add(a, b) {
  return a + b;
}

// console.log(add(1, null))
// console.log(add(1, 'string'))

// 可选参数
function fn2(a: number, b?: number) {
  if (b) return a + b;
  return a;
}

console.log(fn2(1));
console.log(fn2(1, 2));

// 默认值
function fn3(a: number, b: number = 1) {
  return a + b;
}

console.log(fn3(1));
console.log(fn3(1, 2));

// 剩余参数
function fn4(a: number, ...args: number[]) {
  return a + args.reduce((p, c) => p + c, 0) // 返回 a + SUM(args)
}

console.log(fn4(1, 2, 3))
