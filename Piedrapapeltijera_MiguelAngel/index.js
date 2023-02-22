game()

function game() {
    let userChoice = prompt("Elige piedra, papel o tijera:").toLowerCase();
    let computerChoice = Math.floor(Math.random() * 3); // genera un número aleatorio entre 0 y 2
  
    let result;
  
    switch (userChoice) {
      case "piedra":
        switch (computerChoice) {
          case 0:
            result = "Empate";
            break;
          case 1:
            result = "Perdiste :(";
            break;
          case 2:
            result = "Ganaste!";
            break;
        }
        break;
      case "papel":
        switch (computerChoice) {
          case 0:
            result = "Ganaste!";
            break;
          case 1:
            result = "Empate";
            break;
          case 2:
            result = "Perdiste :(";
            break;
        }
        break;
      case "tijera":
        switch (computerChoice) {
          case 0:
            result = "Perdiste :(";
            break;
          case 1:
            result = "Ganaste!";
            break;
          case 2:
            result = "Empate";
            break;
        }
        break;
      default:
        result = "Entrada inválida, por favor elige piedra, papel o tijera";
        break;
    }
  
    alert(result);
  }