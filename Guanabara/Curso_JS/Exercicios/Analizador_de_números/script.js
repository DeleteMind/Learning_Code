let num = document.getElementById("numeros");
let adicionar = document.getElementById("adicionar");
let list = document.getElementById("listnum");
let finalizarbut = document.getElementById("finalizar");
let res = document.getElementById("res");
let array = [];

adicionar.addEventListener("click", analizadorNumeros);
finalizarbut.addEventListener("click", finalizar);

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function analizadorNumeros() {
  if (isNumero(num.value) && !inLista(num.value, array)) {
    //se é um número e se não consta na lista
    array.push(Number(num.value)); // adiciona o valor no array
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    list.appendChild(item);
    res.innerHTML = '';
  } else {
    window.alert("Valor inválido ou já encontrado na lista!");
  }
  num.value = ""; // apaga o valor já adicionado
  num.focus(); // para deixar o cursor na box
}

function finalizar() {
  if (array.length === 0) {
    window.alert("Adicine valores antes de finalizar!");
  } else {
    let tot = array.length;
    let maior = array[0];
    let menor  = array[0];
    let soma = 0;
    let media = 0;
    for (let pos in array) {
        soma += array[pos] 
        if (array[pos] > maior) 
            maior = array[pos]
        if (array[pos] < menor)
            menor = array[pos]
    }
    media = soma / tot ;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`;
    res.innerHTML += `<p> A media dos valores é ${media}.</p>`;
  }
}
