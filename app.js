const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 4444;
const app = express()

app.use(express.static('public'));
app.set('view engine', 'hbs');

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
  }),
);

app.get('/', (req, res) => {
       res.render('index', {pageTitle: 'О нас'})
})

app.get('/portfolio', (req, res) => {
    res.render('portfolio', {pageTitle: 'Портфолио'})
})

app.listen(PORT, () => {
  console.log(`Application server is running on port ${PORT}`);
});