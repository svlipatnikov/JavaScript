const obj = {
    name: 'Sergey',
    age: 31,
    job: 'UIMDB'
}

const entries = [
    ['name', 'Sergey'],
    ['age', 26],
    ['job', 'UIMDB']
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))



const map = new Map(entries)

// console.log(map)
// console.log(map.get('job'))

map
    .set('newField' , 42)
    .set(obj, 'Value of object')
    .set(NaN, '??? nan ???')
//console.log(map);

// console.log(map.get(obj));
// console.log(map.get(NaN))

// map.delete('job')
// console.log(map.has('job'));
// console.log(map.size);
// map.clear()
// console.log(map.size);


// for (let [key, value] of map) {
//     console.log(key, value);
// }

// for (let val of map.values()) {
//     console.log(val);
// }

// for (let val of map.keys()) {
//     console.log(val);
// }

// map.forEach((val, key, map) => {
//     console.log(val, key);
// })


// EXAMPLES
//const array = [...map]

// const array = Array.from(map)
// console.log(array);

// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj);


const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisits(user) {
    return visits.get(user)
}

console.log(lastVisits(users[0]));
console.log(lastVisits(users[1]));
console.log(lastVisits(users[2]));