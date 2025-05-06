

function posNegZero(num) {
    let res = '';
    if (num > 0)  {
        res = `${num} é Positivo.`;
    } else if (num < 0) {
        res =`${num} é Negativo.`;
    } else {
         res =`${num} é Zero.`;
    }
    return res;
}

console.log(posNegZero(-1));