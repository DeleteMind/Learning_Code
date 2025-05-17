


function capPrimeiraLetra(palavra) {
    let letraCap = palavra.at(0).toUpperCase();
    
    let palavraSplit = palavra.split('');
    palavraSplit.shift();
    palavraSplit.unshift(letraCap);
    let palavraJoin = palavraSplit.join('');
    
    return palavraJoin;
}


console.log(capPrimeiraLetra('fica'));