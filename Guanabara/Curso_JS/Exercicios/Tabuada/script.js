let button = document.getElementById("gerarTab");
let tabuada = document.getElementById("seltab");
button.addEventListener("click", gerar);

function gerar() {
  let num = document.getElementById("numeroSelecionado");

  tabuada.innerHTML = "";

  if (num.value.length == 0) {
    window.alert("Digite um número");
  } else {
    let n = Number(num.value);

    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("option"); // cria o elemento option
      item.text = `${n} x ${c} = ${c * n}`;
      item.value = tab`${c}`; // mais tarde para linguagem commo php poderá ser necessário para o programa recohecer o que foi selecionado
      tabuada.appendChild(item); // adiciona o elemento option 'item' no select
    }
  }
}
