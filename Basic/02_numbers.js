//Number
/*
const num = 42      // integer
const float = 42.42 //float
const pow = 10e3   // степень

console.log('MAX_SAFE_INTEGER',Number.MAX_SAFE_INTEGER)
//console.log(Number.MAX_SAFE_INTEGER+5)
console.log('pow(2, 53) -1',Math.pow(2, 53) -1)
console.log('MIN_SAFE_INTEGER',Number.MIN_SAFE_INTEGER)

console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY' , Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY' , Number.NEGATIVE_INFINITY)

console.log('1 / 0' , 1 / 0)
console.log('nan', Number.NaN)  //Not A Number

console.log(typeof NaN)

const weired = 2 / undefined
console.log(isNaN(weired))
console.log(isNaN(42))

console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(42))


const stringInt = '40'
const stringFloat = '40.42'
console.log(Number.parseInt(stringInt) + 2)
console.log(Number(stringInt) + 2)
console.log(parseInt(stringInt) + 2)
console.log(+stringInt + 2)

console.log(Number.parseFloat(stringFloat) + 2)
console.log(Number(stringFloat) + 2)
console.log(parseFloat(stringFloat) + 2)
console.log(+stringFloat + 2)

console.log(0.4 + 0.2)
console.log(+(0.4 + 0.2).toFixed(4))
console.log(parseFloat((0.4 + 0.2).toFixed(4)))

*/


// Bigint
/*
console.log(typeof 90071992547409919999999)
console.log(typeof 90071992547409919999999n)
console.log(90071992547409919999999n - 900719925474099199999n)
console.log(-90071992547409919999999n)

//console.log(90071992547409919999999.0123n)  // Error
//console.log(10n - 4)  // error

console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))

console.log(5n / 2n)  // 2n
*/

// Math
/*
console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25))
console.log(Math.pow(5, 3))
console.log(Math.abs(-42))
console.log(Math.max(5, 42, 30,12 ,11))
console.log(Math.min(5, 42, 30,12 ,11))
console.log(Math.floor(4.9)) // округление вниз
console.log(Math.ceil(4.1))  // округление вверх
console.log(Math.round(4.5)) // округление до ближайшего целого
console.log(Math.trunc(4.5)) // отбрасывает все после точки

console.log(Math.random())
*/

// Example
function getRandomBetween(min, max) {
    return Math.round(Math.random() * (max-min) + min)
}

console.log(getRandomBetween(10, 22))





