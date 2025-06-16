

function verificarDivisibilidade(num) {
    let res = '';
    if (num % 2 === 0 && num % 3 === 0) {
        res = `O número ${num} é divisível por 2 e 3!`
    } else if (num % 2 === 0) {
        res = `O número ${num} é divisivel por 2!` 
    } else if (num % 3 == 0) {
        res = `O número ${num} é divisivel por 3!`
    } else {
        res = `O número ${num} não é divisivel por 2 e 3!`
    }
    return res;
}



console.log(verificarDivisibilidade(7));