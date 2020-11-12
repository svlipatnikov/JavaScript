const citiesRu = ['Moscow', 'Spb', 'Ulyanovsk', 'Kazan']
const citiesEu = ['Berlin', 'Paris', 'London']

const citiesRuWithPopulation = {
    Moscow: 20,
    Spb: 12,
    Ulyanosk: 1,
    Kazan: 5
}
const citiesEuWithPopulation = {
    Moscow: 25,
    Berlin: 15,
    Paris: 10,
    London: 8
}

/// Spread
// console.log(...citiesRu);
// console.log(...citiesEu);

//const allCities = citiesEu.concat(citiesRu)   //ES5
// const allCities = [...citiesRu, 'Vashington', ...citiesEu]  //ES6
// console.log(allCities);

//console.log({...citiesRuWithPopulation})
//console.log({...citiesRuWithPopulation, ...citiesEuWithPopulation});  //Moscow: 25


// EXAMPLE
// console.log(Math.max(5, 37, 42, 17))
// const numbers = [5, 37, 42, 17]
// console.log(Math.max.apply(null,numbers)) //ES5
// console.log(Math.max(...numbers)) //ES6

// const divs = document.querySelectorAll('div')
// //console.log(divs.map(() => {})); // Error: is not a function
// const nodes = [...divs]
// console.log(divs, Array.isArray(divs));
// console.log(nodes, Array.isArray(nodes));
// console.log(nodes.map(()=>{}));


/// Rest
function sum(a, b, ...arrRest) {
    return a + b + arrRest.reduce((sum, i) => sum + i, 0 )
}

const numbers = [1, 2, 3, 4, 5, 6]

//console.log(sum(...numbers)) //Spread!!!


// const a = numbers[0] //ES5
// const b = numbers[1] //ES5

const [a, b, ...other] = numbers  //ES6
console.log(a, b, other)


const person = {
    name: 'Sergey',
    age: 32,
    city: 'Ulyanovsk',
    country: 'Russia'
}

const {name, age, ...adress} = person
console.log(name, age, adress);