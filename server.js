let express = require('express');
let app = express();

const port= 3000;

app.listen(port);

app.use('/hello', (req, res, next) => {
    res.send("Hello World!");
    next();
});

app.use('/', (req, res, next) => {
    res.send("Welcome");
    next();
});