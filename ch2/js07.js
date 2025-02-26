function add(a, b) {
  const num_a = Number(a);
  const num_b = Number(b);

  if (isNaN(num_a) || isNaN(numb)) {
    throw new TypeError("参数必须是数字");
  }
  return a + b;
}

try {
  console.log(add("-", 2));
} catch (error) {
  console.log(error.message);
} finally {
  console.log('finally')
}
