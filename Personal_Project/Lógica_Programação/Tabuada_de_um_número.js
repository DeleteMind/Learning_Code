

function tabuada (num) {

    let tab = '';
    for(let i = 0; i < 11; i ++) {
        tab += `${i} x ${num} = ${i * num}\n`;
    }
    return tab;
}

console.log(tabuada(5));