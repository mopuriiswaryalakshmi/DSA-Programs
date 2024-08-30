function asyncOperation1(callback) {
    setTimeout(() => {
        callback("Result from async operation 1");
    }, 1000);
}

function asyncOperation2(callback) {
    setTimeout(() => {
        callback("Result from async operation 2");
    }, 2000);
}

// function result1() {
//     console.log(result1)
// }
// function result2() {
//     console.log(result2)
// }

asyncOperation1(result1 => {
    console.log(result1);
    asyncOperation2(result2 => {
        console.log(result2);
    });
});

