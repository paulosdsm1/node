const http = require('http')
const port = 3000

const server = http.createServer((re1, res) => {
    res.write('Olá')
    res.and()
})

server.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}`)
})