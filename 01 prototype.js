
// const person = {
//     name: 'Sergey',
//     age: 32,
//     greet: function () {
//         console.log('Greet!')
//     }
// }

const person = new Object({
    name: 'Sergey',
    age: 32,
    greet: function () {
        console.log('Greet!')
    }
})

Object.prototype.sayHello = function () {
    console.log('Hello!')
}

const lena = Object.create(person)
lena.name = 'Elena'


// Строки
// const str = 'I am string'
const str = new String('I am string!')
console.log(str.length);
str.sayHello();