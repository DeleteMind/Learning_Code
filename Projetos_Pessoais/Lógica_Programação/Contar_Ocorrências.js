


function contarOcorrencias(palavra, letra) {
    let contar = 0;
    let palavraLow = palavra.toLowerCase();
    let letraLow = letra.toLowerCase();


    for ( let i = 0; i < palavraLow.length; i++) {
        if (letraLow === palavraLow.at(i)) {
            contar++;
        } 
    }
    return contar;
}

console.log(contarOcorrencias('filipe', 'I'))