


function quadrado() {
    let res='';
    for(let i = 1; i <= 10; i++) {
        res += `${i}\u00B2 = ${i**2}\n`;
    }
    return res;
}

console.log(quadrado());