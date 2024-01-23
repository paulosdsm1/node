const minimist = require("minimist")

const args = minimist(process.arg.slice(2))

console.log(args)

const nome = args["name"]
const profissao = args["profissao"]

console.log(nome, profissao)

console.log(`O nome dele é ${nome} e a profissão dele é ${profissao}`)