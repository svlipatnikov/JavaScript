// String

/*
const name = 'Сергей'
const age = 31

function getAge() {
    return age
}

//const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' год'
//const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} год`
//const output = `Привет, меня зовут ${name} и мой возраст ${age < 20 ? 'A' : 'B'} год`
//console.log(output)


const output = `
    <div>this is div</div>
    <p>this is p</p>
`
console.log(output)
*/

/*
// const name = 'serg' // Какой-то глюк! почему то не отображается методы
const name2 = 'Sergei'
// new String

console.log(name2.length)
console.log(name2.toUpperCase())
console.log(name2.toLowerCase())
console.log(name2.charAt(4))
console.log(name2.indexOf('rg'))
console.log(name2.indexOf('sere'))  //-1
console.log(name2.toLocaleLowerCase().startsWith('ser'))
console.log(name2.startsWith('Ser'))
console.log(name2.endsWith('ei'))
console.log(name2.endsWith('ei!'))
console.log(name2.repeat(3))

const string = '       password        '
console.log(string)
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimRight())
*/

function logPerson(s, name, age) {
    //console.log(s, name, age)
    if (age<0) {age = 'еще не родился'}
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Sergei'
const personName2 = 'Maxim'
const personAge = 32
const personAge2 = -10

const output = logPerson`Name: ${personName}, Age: ${personAge}!`
const output2 = logPerson`Name: ${personName2}, Age: ${personAge2}!`

console.log(output)
console.log(output2)



