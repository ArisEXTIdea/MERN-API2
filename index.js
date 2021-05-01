const express = require('express');
const app = express();

const router = express.Router();

router.use('/customer', (req, res, next) => {
    res.json({nama:'aris'})
})

router.use('/user', (req, res, next) => {
    res.json({nama:'Rena'})
})

app.listen(4000);
app.use('/', router);