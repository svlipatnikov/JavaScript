// Massives destruct
function calcValues (a, b) {
    return [
        a + b,
        undefined, //a - b,
        a * b,
        a / b
    ]
}

// const result = calcValues(42, 10);
// const sum = result[0]
// const sub = result[1]

const [sum, sub = 'Вычитания нет', mult, ...other] = calcValues(42, 10);
 console.log(sum, sub, mult, other);




// Objects destruct
const person = {
    name: 'Sergey',
    age: 32,
    address: {
        country: 'Russia',
        city: 'Ulyanovsk'
    }
}

// const name = person.name
// const {
//     name: firstName = 'Без имени', 
//     age, 
//     car = 'Машины нет',
//     address,
//     address: { city: homeTown, country }
// } = person
// console.log(firstName, age, car, address, homeTown, country);


// const {name, ...info} = person
// console.log(name, info);

// // ES5
// function logPerson(per) { 
//     console.log(per.name + ' ' + per.age);
// }

// ES6
function logPerson({name: firstName = 'someName', age}) {
    console.log(firstName + ' ' + age);
}

logPerson(person);