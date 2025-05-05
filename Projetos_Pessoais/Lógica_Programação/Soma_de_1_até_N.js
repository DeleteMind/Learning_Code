
function somarAte(num) {
    let res = '';
    for(let i = 1; i < num; i++) {
        res += `${i} + ${num} = ${i + num}\n`;
    }
    return res;
}

console.log(somarAte(5));