

function fizzbuzz() {

   let resultado;

  for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0){
        resultado = 'fizzbuzz';
    } else if (i % 5 === 0) {
        resultado = 'buzz';
    } else if (i % 3 === 0) {
        resultado = 'fizz';
    }else {
        resultado =i;
    }
    console.log(resultado);
  }
  
}

fizzbuzz();
