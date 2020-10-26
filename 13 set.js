const set = new Set([1,2,3,3,3,4,5,5,6])
//console.log(set);  // только уникальные значения

set.add(10).add(20).add(30).add(20)

// console.log(set); 
// console.log(set.has(30)); //true
// console.log(set.has(42)); //false
// console.log(set.size);
// console.log(set.delete(1)); //true
// set.clear()
// console.log(set.size);


// одно и то же для обратной совместимости с map
// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())


// for (let key of set) {
//     console.log(key);
// }


function unicValues(array) {
    //return [...new Set(array)]    
    return Array.from(new Set(array))
}

console.log(unicValues([1,1,2,2,3,3,3,4,4,5,6,7,7,7]));