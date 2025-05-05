

function parOuImpar(num) {
    let resposta = '';
    if (num % 2 === 0) {
        resposta = 'Par';
    } else {
        resposta = 'Impar';
    }
    return resposta;
}


console.log(parOuImpar(5));