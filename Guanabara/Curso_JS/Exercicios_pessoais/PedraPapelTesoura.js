const objetos = ["pedra", "papel"];

objetos.push("tesoura"); // add "Tesoura at"

let size = objetos.length; // return 3

const game = (pick) => {
  for (let i = 0; i < size; i++) {
    let index = objetos[i];
    let lowPick = pick.toLowerCase();

    if (lowPick === index) {
      if (lowPick === objetos[0]) {
        return "h1";
      } else if (lowPick === objetos[1]) {
        return "h2";
      } else {
        return "h3";
      }
    }
  }
};

console.log(game("pEDra")); // The Player choose "Papel"
