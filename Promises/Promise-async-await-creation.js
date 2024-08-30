const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true
        if(success) {
            resolve("Operation succeded")
        } else {
            reject("Operation failed")
        }
    }, 10000)
})

async function performOperation () {
    try{
        const result = await myPromise
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}
performOperation()