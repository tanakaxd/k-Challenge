//#region Human array

//Human classの定義
class Human {
    constructor(id, height) {
        this.id = id;
        this.height = height;
    }

    grow(cm) {
        this.height += cm;
    }
}

function generateHumanArray(num) {
    let human = [];
    for (var i = 0; i < num; i++) {
        human.push(new Human(i + 1, getRandomInt(150, 200)));
        console.log(human[i].id, human[i].height);
    }
    return human;
}

function nearestAverage(array) {
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        average += array[i].height;
    }
    average /= array.length;
    console.log(average);


    let diff = [];
    for (let i = 0; i < array.length; i++) {
        diff.push(Math.abs(array[i].height - average));
    }
    console.log(diff);

    let min_diff = diff[0];
    for (let i = 1; i < array.length; i++) {
        min_diff = min_diff > diff[i] ? diff[i] : min_diff;
    }
    console.log(min_diff);

    let nearestPeople = [];
    for (let i = 0; i < array.length; i++) {
        if (diff[i] == min_diff) nearestPeople.push(array[i]);
    }
    console.log(nearestPeople);

    return nearestPeople;

}



//Humanを使った実行
var human_group = generateHumanArray(50);
//var human_group_b = generateHumanArray(100);


console.log(nearestAverage(human_group));


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    //The maximum is exclusive and the minimum is inclusive
}

function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

function getTallestId(human_group) {
    let winner = human_group[0];
    for (let i = 1; i < human_group.length; i++) {
        //winner = winner.height > human_group[i].height ? winner : human_group[i];
        if (winner.height < human_group[i].height) {
            winner = human_group[i];
        }
    }
    return winner.id;
}

function use_grow_all(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].grow(Math.random() * 20);
    }
}

// console.log(human_group);
// setTimeout(() => {
//     use_grow_all(human_group);
//     // human_group[0].height += 1000;
//     console.log(human_group);

// }, 1000);

// let numbers = [0, 1, 2];

// console.log(numbers);
// setTimeout(() => {
//     numbers[0]++;
//     console.log(numbers);

// }, 1000);


let human = new Human(1, 180);
console.log(human);
setTimeout(() => {
    human.height++;
    console.log(human);
}, 3000);

//#endregion