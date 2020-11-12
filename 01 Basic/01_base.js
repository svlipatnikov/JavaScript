//alert(1)
/*


// 1 Переменные
//camelCase

const firstName = 'Sergey'  //string
//const lastName = 'Lipatnikov' //string
const age = 31 // number
const isProgrammer = true //boolean

const _private = ''
const _ = ''
const $ = ''
const withNum5 = ''
//const if = '' //err
// const 5with = '' //err


// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст: ' + age)

//const lastName = prompt('Введите фамилию')
//alert(firstName + ' ' + lastName)

// 3 Операторы
let currentYear = 2020
const birthYear = 1988

//const myAge = currentYear - birthYear
//console.log(myAge)
const a = 10
const b = 5
let c = 32

//c = c + a
c += a

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(++currentYear)
console.log(--currentYear)
console.log(c)
*/


// 4 типы данных
/*
const name = 'Sergey'  //string
const age = 31 // number
const isProgrammer = true //boolean
let x

console.log(typeof name)
console.log(typeof age)
console.log(typeof isProgrammer)
console.log(typeof x)
console.log(null)
*/

// 5 Приоритет операторов 
/*
const fullAge = 31
const birthYear = 1988
const currentYear = 2020

// < > >= <=
const isFullAge = currentYear - birthYear >= fullAge  // 32 >= 21
console.log(isFullAge)
*/

// 6 Условные операторы
/*
const courseStatus = 'fail' // rady, fail, panding

if (courseStatus === 'ready') {
    console.log('курс готов и его можно проходить')
} else if (courseStatus === 'pending') {
    console.log('Курс в процессе разработки')
} else {
    console.log('курс не получился')
}

const num1 = 42   // number
const num2 = '42' // string

console.log(num1 === num2)


const isReady = true
if (isReady) {
    console.log('все готово')
} else {
    console.log('все не готово')
}


const isReady = true
// тернарные выражения
isReady ? console.log('все готово') : console.log('все не готово')

*/

// 7 булевая логика

// 8 Функции
/*
function calcAge(year) {
    return 2020 - year
}

//console.log(calcAge(1988))
//console.log(calcAge(1981))
//console.log(calcAge(1985))

function logInfoAbout(name, year) {
    const age = calcAge(year)

    if (age > 0) {
        console.log('Человек по Имени ' + name + ' сейчас имеет возраст ' + age)
    } else {
        console.log('Это уже будущее')
    }
}

logInfoAbout('Serg', 1988)
logInfoAbout('Serg', 2388)
*/


// 9 Массивы
/*const cars = ['мазда', 'мерседес', 'форд']
//const cars = new Array('мазда', 'мерседес', 'форд')
console.log(cars)
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])
console.log(cars.length)

cars[0] = 'Porshe'
console.log(cars)

cars[cars.length] = 'мазда'
console.log(cars)
*/


// 10 циклы
/*
const cars = ['мазда', 'мерседес', 'форд', 'Porshe']

for (let i = 0; i < cars.length; i++) {
    //console.log(i)
    const car = cars[i]
    console.log(car)
}

for (let car of cars) {
    console.log(car)
}
*/


// 11 Объекты

//const person = new Object
const person = {
    firstName: 'Sergey',
    lastName: 'Lipatnikov',
    year: 1988,
    languages: ['Ru', 'En'],

    hasWife: true,

    greet: function() {
        console.log('greet from person')
    }
}

console.log(person)
console.log(person.firstName)
person.greet()
console.log(person['lastName'])

const key = 'year'
console.log(person[key])

person.hasWife = true
console.log(person.hasWife)

// новый ключ
person.isProgrammer = true
console.log(person)















