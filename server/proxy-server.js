require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;


app.use('/:id', express.static('public'));

app.listen(port, () => { console.log(`Proxy server listening on port ${port}`); });

