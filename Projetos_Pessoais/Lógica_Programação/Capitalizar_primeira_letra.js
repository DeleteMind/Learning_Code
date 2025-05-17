
/*

function capPrimeiraLetra(palavra) {
    let letraCap = palavra.at(0).toUpperCase();
    
    let palavraSplit = palavra.split('');
    palavraSplit.shift();
    palavraSplit.unshift(letraCap);
    let palavraJoin = palavraSplit.join('');
    
    return palavraJoin;
}


console.log(capPrimeiraLetra('fica'));

*/


// Uma versão mais simplificada 


function capPrimeiraLetra(palavra) {
    return palavra.at(0).toUpperCase() + palavra.slice(1);
}

console.log(capPrimeiraLetra('fica'))


let string = 'ola';

console.log(string.slice(1));

