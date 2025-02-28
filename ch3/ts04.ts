// interface
// type

interface Student {
  readonly id: number; // like immutable in Solidity
  name: string;
  age: number;
  gender: string;
  grade: number;
  class: string;
  games?: string[]; 
}

const zs: Student = {
  id: 1,
  name: "张三",
  age: 18,
  gender: "男",
  grade: 1,
  class: "班"
  study(){}
}

// 只读属性不能修改
zs.id = 1;
