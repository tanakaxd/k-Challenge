function nine_nine() {
    let nine_nine_array = [];
    for (let i = 0; i < 9; i++) {
        nine_nine_array[i] = [];
        for (let j = 0; j < 9; j++) {
            nine_nine_array[i][j] = (i + 1) * (j + 1);
        }
    }
    return nine_nine_array;
}

console.log(nine_nine());