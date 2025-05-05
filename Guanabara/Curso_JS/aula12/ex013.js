const date = new Date();
const hora = date.getHours();
const min = date.getMinutes();
const fullHora = (`${hora}:${min}h`)
console.log(fullHora);
console.log(`São ${hora}h atualmente.`);

if (hora <= 12) {
    console.log('Bom dia!');
} else if (hora < 20) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}