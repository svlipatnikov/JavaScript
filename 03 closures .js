/*
function createCalcFunction(n) {
    return function () {
        console.log(1000 * n)
    }
}

const calc = createCalcFunction(42)

console.log(calc)

calc()
*/

/*
function createIncrementor(n) {
    return function (num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(10))
console.log(addOne(41))

console.log(addTen(10))
console.log(addTen(41))
*/

/*
function urlGenerator(domain) { 
    return function (url) {
        return `https://${url}.${domain}`
    }
}

comUrl = urlGenerator('com')
ruUrl = urlGenerator('ru')

console.log(comUrl('google'))
console.log(comUrl('netflix'))

console.log(ruUrl('yandex'))
console.log(ruUrl('vk'))
*/

// Практика
// написать свою функцию bind

const person1 = {
    name: 'name1',
    age: 21,
    job: 'Frontend'
}

const person2 = {
    name: 'name2',
    age: 22,
    job: 'SMM'
}

function logPerson () {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

function bind (context, func) {
    return function () {
        name = context.name
        age = context.age
        job = context.job
        return func()
    }
}

bind (person1, logPerson)()
bind (person2, logPerson)()