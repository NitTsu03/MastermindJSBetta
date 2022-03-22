const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  
/*
  rl.question('Cuantos años tenes?', function(answerAge) {
    rl.question('Cual es tu nombre?', function(answerName) {
      if (answerAge >= 18) {
        console.log('Hola ' + answerName + ', eres un viejo sabroso, adelante mi estimado.')
      } else {
        console.log('Hola ' + answerName + ', anda al kinder, niño rata.')
      }
      rl.close();
    });
  });
*/


  rl.question('Cuantas iteraciones quieres hacer?', function(iterations) {
    for (let i = 0; i < iterations; ++i) {
        console.log(i);
    }
    rl.close()
  });