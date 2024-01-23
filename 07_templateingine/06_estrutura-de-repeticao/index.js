const express = require('express');
const exphbs  = require('express-handlebars');
const port = 3000

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {

  const itens = ["Item a", "Item b", "Item c"]

  res.render('dashboard', {itens})
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
