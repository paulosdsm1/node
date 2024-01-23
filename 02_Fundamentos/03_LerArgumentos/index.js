console.log(process.argv)

const arg = process.argv.slice(2)

console.log(args)

const idade = args[0].split('-')[1]

console.log(idade)

console.log(`O nome dele é ${nome} e ele tem ${idade} anos!`)