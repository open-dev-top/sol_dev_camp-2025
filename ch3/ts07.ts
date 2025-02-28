export{}

class Person{
  public name: string;
  protected age: number;
  private gender: string;
  sleep(time: number): void {
    this.age = 18
  }
}

class Student extends Person {

}
