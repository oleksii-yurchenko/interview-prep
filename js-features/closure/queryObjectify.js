const inc = (function () {
    let count = 0;
    return function () {
        count++;
        console.log(count)
    }
})()


inc();
inc();
