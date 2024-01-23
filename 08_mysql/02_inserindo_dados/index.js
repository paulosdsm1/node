const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const port = 3000

const app = express()

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req, res) => {

    const { title, pageqty } = req.body;
    const sql = 'INSERT INTO books (title, pageqty) VALUES (?, ?)';

    conn.query(sql, [title, pageqty], function(err) {
        if(err) {
            console.log(err);
        }

        res.redirect('/');
    });
});


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P@ulo135',
    database: 'paulo_estudos',
})

conn.connect(function(err) {
    if(err){
        console.log(err)
    }

    console.log('Conectou ao MySQL')

    app.listen(port)

})
