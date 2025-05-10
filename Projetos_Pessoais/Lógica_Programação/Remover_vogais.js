// Nota: Para experimentar alguma das soluções abaixo, por favor comenta primeiro aquela que não irá ser usada

// A minha primeira solução

function removerVogais(frase) {
  let vogais = "aeiouAEIOU";
  let vogaisFrase = "";
  let restoFrase = "";
  for (let i = 0; i < frase.length; i++) {
    if (vogais.includes(frase.at(i))) {
      vogaisFrase += frase.at(i);
    } else {
      restoFrase += frase.at(i);
    }
  }
  return restoFrase;
}

console.log(removerVogais("filipe"));
