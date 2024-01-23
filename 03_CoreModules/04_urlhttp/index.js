const http = require('http');
const url = require('url'); // Importando o módulo url

const port = 3000;

const server = http.createServer((req, res) => {
    const urlInfo = url.parse(req.url, true);
    const name = urlInfo.query.name;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (!name) {
        res.end(`
            <!DOCTYPE html>
            <html lang="pt">
            <head>
                <meta charset="UTF-8">
                <title>Formulário de Contato</title>
            </head>
            <body>
                <form action="/pagina-processa-dados-do-form" method="post">
                    <div>
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required>
                    </div>
                    <div>
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </body>
            </html>
        `);
    } else {
        res.end(`<h1>Seja bem vindo ${name}</h1>`); // Corrigindo o uso da variável name
    }
});

server.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}`);
});
