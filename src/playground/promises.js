const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Thisis my resolve data')
        reject('Something went wrong')
    }, 1500)
    
})

console.log('befre')

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('error', error)
})

console.log('after')