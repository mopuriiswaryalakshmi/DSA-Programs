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

async function runAsyncOperations() {
    try {
        const result1 = await asyncOperation1();
        console.log(result1);
        const result2 = await asyncOperation2();
        console.log(result2);
    } catch (error) {
        console.error("Error:", error);
    }
}

runAsyncOperations();