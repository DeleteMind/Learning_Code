let num = [5, 8, 4];


num[2]; 
num[3] = 6; // acrescenta 6 no indice 3   let num = [5, 8, 4, 6];
num.push(7); // adiciona 7 logo na ultima posição do Array    let num = [5, 8, 4, 6, 7];
num.length; // retorna 5 elementos
num.sort(); //pega em todos os elementos e coloca-os de ordem crescente   let num = [4, 5, 6, 7, 8];
let ordem = '';


num.indexOf(7); // Procura pelo elemento 7 e retorna o seu index, "Existe 7 em num?" // Se não existir algum elemento na Array máquina retorna -1


for (let i = 0; i < num.length; i++) {
    console.log(ordem = num[i]);
   
}

console.log(`Nosso vetor é o ${ordem}`)




// novo for loop apenas para Arrays e Objetos

for(let pos in num) {
    console.log(num[pos]);
}