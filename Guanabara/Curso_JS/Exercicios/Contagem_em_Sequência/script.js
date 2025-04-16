let inicio = Number(document.getElementById('inicio').value);
let fim = Number(document.getElementById('fim').value);
let passo = Number(document.getElementById('passo').value);
let contar = document.getElementById('contar');
 let output = document.getElementById('output');

contar.addEventListener('click', começar);



function começar() {

   for (let i = inicio; i <= fim; i += passo) {
        output.innerHTML = `${i}`;
    }

}
