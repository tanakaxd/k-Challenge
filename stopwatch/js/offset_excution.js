//4-vi
function set_and_clear_interval(func, interval, end) {

    //PatternA
    //setInterval使用アリ
    // let id = setInterval(() => {
    //     func();
    // }, interval);
    // setTimeout(() => {
    //     clearInterval(id);
    // }, end);


    //PatternB
    //setInterval使用ナシ
    let id;

    function funcplus() {
        func();
        id = setTimeout(funcplus, interval);
    }
    setTimeout(() => {
        clearTimeout(id);
    }, end);
    funcplus();



    //検証用
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
}

// set_and_clear_interval(() => {
//     console.log(new Date())
// }, 1000, 5000);




//4-vii
function excute_random_secs(func) {

    function funcplus() {
        func();
        let random_sec = 1000 + Math.random() * 2000;
        console.log(random_sec);
        setTimeout(funcplus, random_sec);
    }
    funcplus();
}

// excute_random_secs(() => {
//     console.log(new Date());
// })




//4-viii
function excute_two_and_three(func) {

    //patternA
    // 重複実行を許可
    // setInterval(() => {
    //     func();
    // }, 2000);
    // setInterval(() => {
    //     func();
    // }, 3000);


    //patternB
    重複実行禁止
    let count = 0;
    setInterval(() => {
        if (count % 2 == 0 || count % 3 == 0) {
            func();
        }
        count++;
    }, 1000);
}

excute_two_and_three(() => {
    console.log(new Date().getSeconds());
})