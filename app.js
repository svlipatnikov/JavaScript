// prototype

// const person = {
//     name: 'someName',
//     age: 0,
//     logPerson: function() {
//         console.log(this.name + ' (' + this.age + ')')
//     }
// }
// person.logPerson()

// Object.prototype.sayHello = function () {
//     console.log('Hello!');
// }

// const lena = Object.create(person)
// lena.name = 'Elena'
// lena.age = 25
// lena.logPerson()

// const str = 'hello!'
// str.sayHello()   // есть у строк, т.к. есть у глобального объекта
// //str.logPerson() // у строк такого метода нет

// const arr = [1,2,3,4,5]

// Array.prototype.myltBy = function (multiplicator) {
//     return this.map((el) => {
//         return el * multiplicator
//     })
// }

// console.log(arr);
// console.log(arr.myltBy(2));

class Person {
  constructor(p1) {
    this.name = p1
  }

  greet() {
    console.log(this.name + ' передает привет')
  }

  type = 'human'
}

const max = new Person('Max')

// console.log(max);
// max.greet()
// console.log(max.type);
//console.log(max.__proto__ === Person.prototype)

class Programmer extends Person {
  constructor(name, job) {
    super(name)

    this._job = job // xnj,s
  }

  // переписывание родительского метода
  greet() {
    super.greet()
    console.log('new greet')
  }

  // геттер
  get job() {
    return this._job.toUpperCase()
  }

  //сеттер
  set job(job) {
    if (job.length > 2) {
      this._job = job
    } else console.log('Not valid job')
  }
}

const frontend = new Programmer('max', 'frontend')

// console.log(frontend);
// console.log(frontend.job);

// frontend.job = 'a' //not valid
// console.log(frontend.job)

// frontend.job = 'BackEnd'
// console.log(frontend.job)

// статические методы
class Utils {
  static average(...array) {
    // static  доступен только у Utils
    return array.reduce((acc, num) => (acc += num), 0) / array.length
  }
}
console.log(Utils.average(1, 2, 3, 5, 8, 13))

class Utils {
  average(...array) {
    return array.reduce((acc, num) => (acc += num), 0) / array.length
  }
}
const utils = new Utils()
console.log(utils.average(1, 2, 3, 5, 8, 13))
