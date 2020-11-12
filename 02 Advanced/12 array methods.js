const people = [
    {name: 'Sergey', age: 31, budget: 40000},
    {name: 'Kostya', age: 36, budget: 100000},
    {name: 'Nastya', age: 14, budget: 50000},
    {name: 'Evgenij', age: 32, budget: 35000},
    {name: 'Den', age: 25, budget: 25000},
    {name: 'Dima', age: 15, budget: 6000},
]

//FOR

// //ES5
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// //ES6
// for (let person of people) {
//     console.log(person)
// }


// FOR EACH - проходит по всем элемнтам массива, не возвращает значения

// ES5
// people.forEach(function(person, index, peopleArray) {
//     console.log(person)
//     console.log(index)
//     console.log(peopleArray)
// })

// people.forEach(function(person) {
//     console.log(person)
// })

// ES6
// people.forEach(person => console.log(person))


// MAP - возвращает новый массив. Перебираем исходный массив, чтобы сделать преобразования

const newPeople = people.map(person => {    
    //return person     
    //return 'Hello'
    //return person.name
    //return `${person.name} (${person.age})`
    return person.age * 3
})
// const newPeople = people.map(person => person.age * 3)
// console.log(newPeople)


// FILTER - возвращает новый массив из элементов, подходящих под условие (колбэк = true)

// const adults = []
// for (let i=0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults);

// const adults = people.filter(person => {
//     if (person.age >= 18) { return true }
// })
// console.log(adults);

const adults = people.filter(person => person.age >= 18)
// console.log(adults);


// REDUCE - возвращает значение, измененяет значения переменной total на каждой итерации

// let amount = 0;
// for (let  i= 0; i < people.length; i++) {
//     amount += people[i].budget
// }
// console.log(amount)

const amount = people.reduce((total, person) => {
    return total + person.budget
}, 0)
console.log(amount)

// const amount = people.reduce((total, person) => total + person.budget, 0) 
// console.log(amount)



// //FIND - поиск нужного элемента массива

// const sergey = people.find(person => person.name === 'Sergey')
// console.log(sergey);



// //FIND INDEX - поиск индекса нужного элемента

// const iSergey = people.findIndex(person => person.name === 'Sergey')
// console.log(iSergey);



// EXAMPLE

// const newAmount = people
//     .filter(person => person.budget >= 30000)
//     .map(person => {
//         return {
//             info: `${person.name} (${person.age})`,
//             budget: Math.sqrt(person.budget)
//         }
//     })
//     .reduce((total, person) => total + person.budget, 0)

// console.log(newAmount);








