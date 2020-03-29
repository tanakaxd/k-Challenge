//#region Human array

class Human {
    constructor(id, height) {
        this.height = height;
        this.id = id;
    }

    grow(cm) {
        this.height += cm;
    }
}


var group = new Array();
for (var i = 0; i < 100; i++) {
    group.push(new Human(i + 1, getRandomInt(150, 200)));
    //console.log(group[i]);
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

function getTallestId(group) {
    let winner = group[0];
    for (let i = 1; i < group.length; i++) {
        //winner = winner.height > group[i].height ? winner : group[i];
        if (winner.height < group[i].height) {
            winner = group[i];
        }
    }
    return winner.id;
}

console.log(group);
console.log(getTallestId(group));

console.log(getMax([1, 2, 3, 0, 12, 38, 0, 1]));

//#endregion