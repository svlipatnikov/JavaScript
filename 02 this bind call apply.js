function hello() {
    console.log('Hello', this)
}

const person ={
    name: 'Sergey',
    age: 25,     
    sayHello: hello,
    sayHelloWindow: hello.bind(this), //hello.bind(window)  this === window
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

// const fnLenaInfoLog = person.logInfo.bind(lena)
// fnLenaInfoLog()
// fnLenaInfoLog('Frontend', '89603737340')

// person.logInfo.bind(lena, 'FrontEnd', '89121233123')()  // bind возвращает функцию
// person.logInfo.call(lena, 'FrontEnd', '89121233123')    // call вызывает функцию
// person.logInfo.apply(lena, ['FrontEnd', '89121233123']) // apply вызывает функцию

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

// добавляем метод multBy в прототип глобального объекта Array
Array.prototype.multBy = function (n) {
    return this.map(function(i) {
        return i * n
    })
}

// console.log(array.multBy(20))