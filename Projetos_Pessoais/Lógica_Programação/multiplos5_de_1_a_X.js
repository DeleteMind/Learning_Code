


function multiplosCinco(num) {

    let res = '';
    for (let i = 1; i <= num; i++) {
        if (i % 5 === 0) {
            res += `Multiplos de 5: ${i}\n`;
        }
    }
    return res;
}


console.log(multiplosCinco(21))