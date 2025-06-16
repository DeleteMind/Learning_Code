function capitalizarPalavas(frase) {
    let palavras = frase.split(' '); //separa a frase em palavras
    let resultado = [];


    for (let palavra of palavras) {
        let primeira = palavra.at(0).toUpperCase(); // Capitaliza e devolve a primeira letra de cada palavra 
        let resto = palavra.slice(1) // pega no resto de cada palavra
        resultado.push(primeira + resto)        
    }

   return resultado.join (' ')


}

console.log(capitalizarPalavas('ola estás bom?'))