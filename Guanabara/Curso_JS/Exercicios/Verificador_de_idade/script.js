let ano = document.getElementById("ano");
let masc = document.getElementById("masc");
let femi = document.getElementById("femi");
let sub = document.getElementById("submit");
let res = document.getElementById("resultado");

sub.addEventListener("click", checkIdade);

function checkIdade() {
  let anoActual = new Date().getFullYear();
  let anoNascimento = Number(ano.value);
  let idade = anoActual - anoNascimento;

  if (!anoNascimento || anoNascimento > anoActual ) {
    res.innerHTML = 'Por favor, digite um ano válido';
    return
  }

  let checkSexo = masc.checked ? "masculino" :  femi.checked ? 'Feminino' : 'de género não especificado';


  if (idade <= 2) {
    //Bebé
    res.innerHTML = `Detectamos um bebé ${checkSexo} com ${idade}`;
  } else if (idade <= 12) {
    //criança
    res.innerHTML = `Detectamos uma criança ${checkSexo} com ${idade}`;
  } else if (idade <= 17) {
    //adolescente
    res.innerHTML = `Detectamos um adolescente ${checkSexo} com ${idade}`;
  } else if (idade < 60) {
    //adulto
    res.innerHTML = `Detectamos um adulto ${checkSexo} com ${idade}`;
  } else {
    res.innerHTML = `Detectamos um idoso ${checkSexo} com ${idade}`;
    //idoso
  }
}
