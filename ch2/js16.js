// filter
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // 输出 [2, 4]


// map
const numbers2 = [1, 2, 3];
const squaredNumbers = numbers2.map(num => num * num);
console.log(squaredNumbers); // 输出 [1, 4, 9]


// reduce
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 输出 15
