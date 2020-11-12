console.log('Start')

//console.log('Start2')

function timeout2sec () {
    console.log('timeout2sec')
}

setTimeout(function() {
    console.log('Inside timeOut after 0 sec')
}, 2000)

setTimeout(timeout2sec, 0)

console.log('End')