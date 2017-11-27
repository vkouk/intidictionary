const express = require('express');
const router = express.Router();
const DB = require('../classes/db');

const database = new DB();

router.get('/', (req, res) => {
    res.send('API BackEndServer');
});

router.get('/censoredwords', (req, res) => {
    database.query('SELECT * FROM censoredwords')
        .then((rows, err) => {
            if(err) {
                console.log(err);
                database.closeConnection();
            }
            res.json(rows);
    });
});

router.get('/gr_words', (req, res) => {
    database.query('SELECT * FROM gr_words')
        .then((rows, err) => {
            if(err) {
                console.log(err);
                database.closeConnection();
            }
            res.json(rows);
        });
});

router.get('/en_words', (req, res) => {
    database.query('SELECT * FROM en_words')
        .then((rows, err) => {
            if(err) {
                console.log(err);
                database.closeConnection();
            }
            res.json(rows);
        });
});

module.exports = router;
