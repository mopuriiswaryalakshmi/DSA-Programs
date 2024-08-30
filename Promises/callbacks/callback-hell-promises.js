function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Result from async operation 1"), 1000);
    });
}

function asyncOperation2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Result from async operation 2"), 2000);
    });
}

asyncOperation1()
    .then(result1 => {
        console.log(result1);
        return asyncOperation2();
    })
    .then(result2 => {
        console.log(result2);
    })
    .catch(error => {
        console.error("Error:", error);
    });