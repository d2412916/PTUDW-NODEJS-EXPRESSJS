const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const expressHandlerbars = require('express-handlebars');




app.use(express.static(__dirname + '/html'));
// app.use(express.static(path.join(__dirname + '../public')));
app.engine('hbs', expressHandlerbars({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'layout',
    extname: 'hbs'
}))

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
})


app.use('/task1', require('./routes/task1Route.js'))
app.use('/task3', require('./routes/task3Route.js'))


app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})