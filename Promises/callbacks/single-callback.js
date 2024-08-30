// Function that accepts a callback
function doSomethingAsync(callback) {
    setTimeout(() => {
        console.log("Operation complete.");
        callback("Data from async operation");
    }, 1000);
}

// Callback function
function handleResult(result) {
    console.log("Callback received:", result);
}

// Calling the function with a callback
doSomethingAsync(handleResult);