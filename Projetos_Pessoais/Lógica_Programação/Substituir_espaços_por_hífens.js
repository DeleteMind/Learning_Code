

function espaçosHífens(frase) {
    let espaços = ' ';
    let novaFrase = '';
   for (let i = 0; i < frase.length; i++) {
    if (frase[i] === espaços){
        novaFrase += '-';
    } else {
        novaFrase += frase[i];
    }
   }
    
    console.log(novaFrase)

}


espaçosHífens('ola, estás bom')