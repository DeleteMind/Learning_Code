

function posNegZero(num) {
    let res = '';
    if (num === 0)  {
        res = `${num} é Zero.`;
    } else if (num < 0) {
        res =`${num} é Negativo.`;
    } else {
         res =`${num} é Positivo.`;
    }
    return res;
}

console.log(posNegZero(-1));