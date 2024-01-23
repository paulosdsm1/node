const chalk = require("chalk")

const nota = 9;

if(nota >= 6) {
    console.log(chalk.green('Parabéns você está aprovado'))
} else{
    console.log(chalk.red('Infelizmente você salve não conseguiu ser aprovado e precisará fazer a prova de recuperação.'))
}