interface Person{
  name: string;
  age: number;
  gender: string;
}

interface Student extends Student{
  readonly id: number; // like immutable in Solidity
  grade: number;
  class: string;
  games?: string[]; 
}

interface OfficeWorker extends Person {
  company: string;
  salary: number;
}

interface Teacher extends Person{
  subject: string
}
