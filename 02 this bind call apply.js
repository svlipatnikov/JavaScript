function hello() {
    console.log('Hello', this)
}

const person ={
    name: 'sergey',
    age: 25,     
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

//person.logInfo.bind(lena, 'FrontEnd', '89121233123')()
// person.logInfo.call(lena, 'FrontEnd', '89121233123')
person.logInfo.apply(lena, ['FrontEnd', '89121233123'])


///=============================
// Контекст и прототипы


const array = [1, 2, 3, 4, 5]

/*
function multBy(arr, n) {
    return arr.map(function(i) {
        return i * n
    })
}
console.log(multBy(array, 5))
*/

Array.prototype.multBy = function (n) {
    return this.map(function(i) {
        return i * n
    })
}

console.log(array.multBy(20))