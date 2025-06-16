const objetos = ["PEDRA", "PAPEL", "TESOURA"];

let size = objetos.length; // return 3

const game = (pick) => {
  let randomNumber = Math.floor(Math.random() * size); // Generate a random number beetwen 0 to 2;
  let computer = objetos[randomNumber];
  let player = pick.toUpperCase();
  index = '';

  for (let i = 0; i < size; i++) {
      index = objetos[i] ;
      
    }

    if (!objetos.includes(player)) {
      return 'Por Favor, escolhe uma opção válida.'
     } else {
    
      if (player === computer) {
        return `É um empate! O Jogador escolheu ${player} e o Computador escolheu ${computer} `;
      } else if (
        (player === "PEDRA" && computer === "PAPEL") ||
        (player === "PAPEL" && computer === "TESOURA") ||
        (player === "TESOURA" && computer === "PEDRA")
      ) {
        return `O Computador Ganhou! O Jogador escolheu ${player} e o Computador escolheu ${computer} `;
      } else {
        return `O Jogador Ganhou! O Jogador escolheu ${player} e o Computador escolheu ${computer} `;
      }
    }
    
};

console.log(game("peDra")); //Choosen of the player

