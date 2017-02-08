let express = require('express');
let app = express();

const localPort = 3000;

let port = process.env.PORT || localPort;
app.set('port', port);
app.listen(port);

app.use('/hello', (req, res, next) => {
    res.send("Hello World!");
    next();
});

app.use('/', (req, res, next) => {
    res.send("Welcome");
    next();
});

module.exports = app;