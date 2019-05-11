const express = require('express');
const app = express();
const pug = require('pug');


app.engine('pug', pug.__express);
app.set('views', './views');
app.set('view engine', 'pug');

app.use('/src', express.static(__dirname + '/src'));


app.get('/', function (req, res) {
    return res.render('index');
});

app.get('/contact', function (req, res) {
    return res.render('contact');
});

app.all("*", function (req, res, next) {
    return res.send('page not found');
});


app.listen(process.env.PORT || 3000, function () {
    console.log('Server start. http://localhost:3000');
});

