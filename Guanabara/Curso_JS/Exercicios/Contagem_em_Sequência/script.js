let contar = document.getElementById("contar");
let output = document.getElementById("output");

contar.addEventListener("click", começar);

function começar() {
  let inicio = Number(document.getElementById("inicio").value);
  let fim = Number(document.getElementById("fim").value);
  let passo = Number(document.getElementById("passo").value);

  output.innerHTML = "";

  if (!inicio || !fim || !passo) {
    output.innerHTML = "Por favor, preencha todos os passos";
  } else {
    for (let i = inicio; i <= fim; i += passo) {
      output.innerHTML += `${i} `;
    }
  }
}
