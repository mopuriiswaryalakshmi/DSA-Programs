function asyncOperationWithError(callback) {
    setTimeout(() => {
        const error = null; // or new Error('Something went wrong')
        const result = "Operation result";
        callback(error, result);
    }, 1000);
}

asyncOperationWithError((error, result) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log("Result:", result);
});