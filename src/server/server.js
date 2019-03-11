const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const { serverAppRenderer } = require('./../../public/ssr.bundle.js');
const templateFn = require('./template');

app.use(express.static(path.join(__dirname, '/../../public')));

app.get('*', (req, res) => {
    serverAppRenderer(req).then(({ html, preloadedState }) => {
        res.send(templateFn(html, preloadedState));
    });
})

app.listen(port, (req, res) => {
    console.log( `http://localhost:${port}`);
})