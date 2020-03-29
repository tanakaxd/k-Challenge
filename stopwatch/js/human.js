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



//Humanを使った実行
var human_group = new Array();
for (var i = 0; i < 300; i++) {
    human_group.push(new Human(i + 1, getRandomInt(150, 200)));
    //console.log(human_group[i]);
}

var human_group_b = new Array();
for (var i = 0; i < 300; i++) {
    human_group_b.push(new Human(i + 1, getRandomInt(150, 200)));
    //console.log(human_group[i]);
}

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

console.log(human_group);
console.log(getTallestId(human_group));

console.log(getMax([1, 2, 3, 0, 12, 38, 0, 1]));

//#endregion