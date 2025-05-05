



function numPares(num) {

        let res = '';
    for (let i = 1; i <= 20; i++) {
        if( i % 2 === 0){
            res += `${i} + ${num} = ${i + num}\n` 
        } else {
            res += `${i}\n`;
        }
    }

    return res;
}


console.log(numPares(1));