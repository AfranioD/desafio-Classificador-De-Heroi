const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita ao usuário que insira o nome do herói
rl.question('Digite o nome do herói: ', function(nomeHeroi) {
  // Solicita ao usuário que insira a quantidade de experiência (XP) do herói
  rl.question('Digite a quantidade de experiência (XP) do herói: ', function(xpHeroi) {
    xpHeroi = parseInt(xpHeroi);

    // Utiliza uma estrutura de decisão para determinar o nível do herói com base na XP
    var nivelHeroi;

    if (xpHeroi < 1000) {
      nivelHeroi = "Ferro";
    } else if (xpHeroi <= 2000) {
      nivelHeroi = "Bronze";
    } else if (xpHeroi <= 5000) {
      nivelHeroi = "Prata";
    } else if (xpHeroi <= 6000) {
      nivelHeroi = "Ouro";
    } else if (xpHeroi <= 8000) {
      nivelHeroi = "Platina Diamante";
    } else if (xpHeroi <= 9000) {
      nivelHeroi = "Ascendente";
    } else if (xpHeroi <= 10000) {
      nivelHeroi = "Imortal";
    } else {
      nivelHeroi = "Radiante";
    }

    // Exibe a mensagem final com o nome do herói e seu nível
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}.`);

    // Fecha a interface de leitura
    rl.close();
  });
});
