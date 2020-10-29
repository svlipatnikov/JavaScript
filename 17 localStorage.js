// localStorage.clear() // очищает весь localStorage

// const myNumber = 42

// localStorage.removeItem('number') // удаляет объект из localStorage

// console.log(localStorage.getItem('number')) //получаем

// localStorage.setItem('number', myNumber.toString()) // устанавливаем только строковые значения

// console.log(localStorage.getItem('number'))

//localStorage.removeItem('number')


const object = {
    name: 'Sergey',
    age: 32
}

localStorage.setItem('person', JSON.stringify(object))

const person = JSON.parse(localStorage.getItem('person'))
person.name = 'Max'

// console.log(person);


window.addEventListener('storage', event => {
    console.log(event)  // вызывается в другой вкладке (не там где setItem)
})