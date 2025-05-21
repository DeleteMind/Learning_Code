function inverterFrase(frase) {
    let separarFrase = frase.split(' ');
    let palavrasInvertidas = separarFrase.map(separarFrase => {
        return separarFrase.split('').reverse().join('');
    });
    return palavrasInvertidas.join(' ');


}



console.log(inverterFrase('ola, estás bom?'));