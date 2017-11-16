const express = require('express');
const router = express.Router();
const DB = require('../classes/db');

const database = new DB();

router.get('/', (req, res) => {
    res.send('API BackEndServer');
});

router.get('/users', (req, res) => {
    database.query('SELECT * FROM users')
        .then((rows, err) => {
            if(err) {
                console.log(err);
                database.closeConnection();
            }
            res.json(rows);
    });
});

module.exports = router;
