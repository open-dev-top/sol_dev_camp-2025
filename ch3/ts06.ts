export{}

interface Person{
  name: string;
  age: number;
  gender: string;
  sleep(
    time: number
  ): void
}

interface Student extends Person{
  study(subject: string): void;
}

// 同名 interface 会被合并
