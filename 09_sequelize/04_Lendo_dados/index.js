const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const User = require('./modules/User') // Corrigido para letra maiúscula

const app = express()

const conn = require('./db/conn')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/users/create', (req, res) => {
  res.render('adduser')
})

app.post('/user/create', async (req, res) => {
  const name = req.body.name[0];
  const occupation = req.body.name[1];
  let newsletter = req.body.newsletter;

  if(newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  console.log(req.body)

  await User.create({name, occupation, newsletter});

  res.redirect('/');
});


app.get('/', async (req, res) => {

  const users = await User.findAll({raw: true})

  console.log(users)

  res.render('home', {users: users})
})

conn.sync().then(() => {
  app.listen(port)
})
.catch((err) => console.log(err))
