const express = require('express');
const path = require('path');
const restEndpoints = require('./startup/routes');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

restEndpoints(app);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});