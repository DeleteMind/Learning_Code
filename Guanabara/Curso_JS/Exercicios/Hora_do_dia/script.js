
function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');

    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        img.scr = 'Fotos/manha.png';
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'Fotos/tarde.png';
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'Fotos/noite.png';
        document.body.style.background = '#515154'
    }
}


