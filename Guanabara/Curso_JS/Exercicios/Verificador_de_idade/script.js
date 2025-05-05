let ano = document.getElementById("ano");
let masc = document.getElementById("masc");
let femi = document.getElementById("femi");
let sub = document.getElementById("submit");
let res = document.getElementById("resultado");
let img = document.getElementById("imagem");

sub.addEventListener("click", checkIdade);



function checkIdade() {
  let anoActual = new Date().getFullYear();
  let anoNascimento = Number(ano.value);
  let idade = anoActual - anoNascimento;

  if (!anoNascimento || anoNascimento > anoActual) {
    res.innerHTML = "Por favor, digite um ano válido";
    return;
  }

  // verifica se o input está selecionado ou não
  let checkSexo = masc.checked
    ? "masculino"
    : "feminino";


  if (idade <= 2) {
    //Bebé
    
    res.innerHTML = `Detectamos um bebé ${checkSexo} com ${idade}`;
    checkSexo === "masculino"
      ? (img.src = "Fotos/bebeM.jpg")
      : (img.src = "Fotos/bebeF.jpg");
  } else if (idade <= 12) {
    //criança
    res.innerHTML = `Detectamos uma criança ${checkSexo} com ${idade}`;
    checkSexo === "masculino"
      ? (img.src = "Fotos/criançaM.jpg")
      : (img.src = "Fotos/criançaF.jpg");
  } else if (idade <= 17) {
    //adolescente
    res.innerHTML = `Detectamos um adolescente ${checkSexo} com ${idade}`;
    checkSexo === "masculino"
      ? (img.src = "Fotos/jovemM.jpg")
      : (img.src = "Fotos/jovemF.jpg");
  } else if (idade < 60) {
    //adulto
    res.innerHTML = `Detectamos um adulto ${checkSexo} com ${idade}`;
    checkSexo === "masculino"
      ? (img.src = "Fotos/adultoM.jpg")
      : (img.src = "Fotos/adultoF.jpg");
  } else {
    //idoso
    res.innerHTML = `Detectamos um idoso ${checkSexo} com ${idade}`;
    checkSexo === "masculino"
      ? (img.src = "Fotos/idosoM.jpg")
      : (img.src = "Fotos/idosaF.jpg");
  }
}
