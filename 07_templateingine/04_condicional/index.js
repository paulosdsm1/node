const express = require('express');
const exphbs  = require('express-handlebars');
const port = 3000

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.get('/', function (req, res) {
    const user = {
      name: 'Paulo',
      surname: 'Sérgio',
    }

    const auth = true
  
    res.render('home', { user: user, auth})
  })
app.listen(port,() => {
    console.log(`App funcionando na porta ${port}`)
});
