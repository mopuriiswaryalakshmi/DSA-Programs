const fetchFromApi1 = () => Promise.resolve('Data from API 1')
const fetchFromApi2 = () => Promise.reject('Data from API 2')
const fetchFromApi3 = () => Promise.resolve('Data from API 3')

// Promise.allSettled([fetchFromApi1(), fetchFromApi2(), fetchFromApi3()])
// .then(results => {
//     console.log(results)
//     const fullfilled = results.filter(result => result.status === 'fulfilled')
//     console.log("fullfilled===")
//     console.log(fullfilled)
//     /* [{ status: 'fulfilled', value: 'Data from API 1' },
//     { status: 'fulfilled', value: 'Data from API 3' }] */

//     const rejected = results.filter(result => result.status === 'rejected')
//     /* [ { status: 'rejected', reason: 'Data from API 2' } ] */
//     console.log("rejected===")
//     console.log(rejected)

//     console.log('Fulfilled Promise', fullfilled.map(result => result.value)) //Fulfilled Promise [ 'Data from API 1', 'Data from API 3' ]
//     console.log('Rejected Promise', rejected.map(result => result.reason))  // Rejected Promise [ 'Data from API 2' ]
// })
// .catch(error => {
//     console.error('unexpected error', error)
// })
// To know index
Promise.allSettled([fetchFromApi1(), fetchFromApi2(), fetchFromApi3()])
.then(results => {
    results.forEach((result, index) => {
        if(result.status == 'fulfilled') {
            console.log(`Promise ${index} resolved with:`, result.value)
        } else {
            console.error(`Promise ${index} rejected with:`, result.reason)
        }
    })
})
.catch(error => {
    console.error('unexpected error', error)
})