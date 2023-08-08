const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    let data1 = req.body.first;
    let data2 = req.body.second;
    let total = data1 + data2;
    res.json({ result: total });
});

baseRouter.post('/subtract', (req, res) => {
    let data1 = req.body.first;
    let data2 = req.body.second;
    let total = data1 - data2;
    res.json({ result: total });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});