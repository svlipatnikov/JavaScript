const requestURL = 'https://jsonplaceholder.typicode.com/users'


function sendRequest (method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
    
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }    
        }
    
        xhr.onerror = () => {
            resolve(xhr.response)
        }
    
        xhr.send(JSON.stringify(body))
    })
}

// // GET
// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// POST
const myBody = {
    name: 'Sergey',
    age: 32
}

sendRequest('POST', requestURL, myBody)
    .then(data => console.log(data))
    .catch(err => console.log(err))