const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const user = require('./modules/User')

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

app.get('/', function (req, res) {
  res.render('home')
})

conn.sync().then(() => {
  app.listen(port)
})
.catch((err) => console.log(err))