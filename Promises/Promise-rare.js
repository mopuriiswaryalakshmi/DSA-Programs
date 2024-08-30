const fetchFromApi1 = () => Promise.resolve("Data from API 1")
const fetchFromApi2 = () => Promise.reject("Data from API 2")
const fetchFromApi3 = () => Promise.resolve("Data from API 3")

Promise.race([fetchFromApi1(), fetchFromApi2(), fetchFromApi3()])
.then(result => {
    console.log("I am from Then--")
    console.log(result)
})
.catch(error => {
    console.log("I am from catch--")
    console.log(error)
})