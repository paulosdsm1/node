const { read } = require("fs")

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual a sua linguagem de programação preferida? ", (language) => {
    if(language == "html", "css") {
        console.log(`${language} não é uma linguagem de programação.`)
    }else
    console.log(`A minha linguagem preferida é: ${language}`)
    readline.close()
})
