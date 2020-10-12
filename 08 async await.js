const delay = ms => new Promise((resolve) => setTimeout(() => resolve(),ms))

// const delay = function (ms) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }

//delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }

// fetchTodos()
// .then(data => {
//     console.log('Data:',data)
// })
// .catch(e => console.error(e))

async function fetchAsuncTodos() {
    console.log('Fetch todo started...')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e)
    } finally {
        console.log('End')
    }
}

fetchAsuncTodos()