// Nota: Para experimentar alguma das soluções abaixo, por favor comenta primeiro aquela que não irá ser usada

// A minha primeira solução

/*
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

console.log(removerVogais("filipe e Eva"));

*/

//Versão Simplificada

function removerVogais(frase) {
  let vogais = "aeiouAEIOU";
  let res = "";
  for (let i = 0; i < frase.length; i++) {
    if (!vogais.includes(frase.at(i))) {
      //só entra o if se NÃO fro um vogal
      res += frase.at(i);
    }
  }
  return res;
}

console.log(removerVogais("filipe"));
