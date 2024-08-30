const fetchFromApi1 = () => Promise.resolve("Data from API 1")
const fetchFromApi2 = () => Promise.resolve("Data from API 2")
const fetchFromApi3 = () => Promise.resolve("Data from API3")

Promise.all([fetchFromApi1(), fetchFromApi2(), fetchFromApi3()])
.then(results => {
    console.log("From Then function--")
    console.log(results)
})
.catch(error => {
    console.log("From Catch function--")
    console.log(error)
})