


function divisão(num) {
    if (num % 3 === 0 && num % 5 === 0) {
       return 'Divísivel por 3 e 5';
    } else {
       return 'Não é divisivel'
    }
    
}

console.log(divisão(121));