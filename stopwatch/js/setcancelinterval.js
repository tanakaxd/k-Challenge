function set_and_clear_interval(func, interval, end) {
    // let id = setInterval(() => {
    //     func();
    // }, interval);
    // setTimeout(() => {
    //     clearInterval(id);
    // }, end);


    // function funcplus() {
    //     let id;
    //     func();
    //     id = setTimeout(funcplus, interval);
    //     console.log("start" + id);

    //     setTimeout(() => {
    //         console.log("inside settimeout");
    //         console.log("stop" + id);


    //         clearTimeout(id);
    //     }, end);
    // }
    // funcplus();



    let id;

    function funcplus() {
        func();
        id = setTimeout(funcplus, interval);
    }
    setTimeout(() => {
        clearTimeout(id);
    }, end);
    funcplus();
}


// set_and_clear_interval(() => {
//     console.log(new Date())
// }, 1000, 5000);



function setIntervalWithoutSetInterval(func, ms) {
    let count = 0;

    function funcplus() {
        func();
        count++;
        if (count > 10)
            return;
        id = setTimeout(funcplus, ms);
    }
    funcplus();
}

// setIntervalWithoutSetInterval(() => {
//     console.log(new Date())
// }, 100);