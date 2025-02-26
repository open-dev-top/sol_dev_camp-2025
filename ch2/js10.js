// 吃不了正则的苦，就要吃 if 的苦
// 特点：可读性差，性能差
// 模式：/abc/

const pattern = /abc/

const target = 'abcdefg'

const result = pattern.test(target)
console.log(result)


// 场景1：校验用户提交表单
