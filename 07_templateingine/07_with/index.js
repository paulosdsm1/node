const express = require('express');
const exphbs  = require('express-handlebars');
const port = 3001

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {

  const itens = ["Item a", "Item b", "Item c"]

  res.render('dashboard', {itens})
})

app.get('/post', (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Este artigo vai te ajudar a aprender Node.js...",
    comments: 4,
  }
  res.render('blogpost', { post })
})

app.get('/', function (req, res) {
    const user = {
      name: 'Paulo',
      surname: 'Sérgio',
    }

    const auth = true

    const approved = false
  
    res.render('home', { user: user, auth, approved})
  })
app.listen(port,() => {
    console.log(`App funcionando na porta ${port}`)
});
