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

asyncOperation1(result1 => {
    console.log(result1);
    asyncOperation2(result2 => {
        console.log(result2);
    });
});