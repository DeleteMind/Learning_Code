




function isPalindrome(name) {

 
    let Upper = name.toUpperCase();
    let splitString = Upper.split('').reverse().join('');
    
    if (Upper === splitString) {
        resultado = true;
    }else {
        resultado = false;
    }
    return resultado;
}





console.log(isPalindrome('ana'));