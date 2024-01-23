const x = "10"

// Checar se x é um número

if(Number.isInteger(x)) {
    throw new console.error( "O valor de x não é um número inteiro");
}

console.log("Continuando o código.")