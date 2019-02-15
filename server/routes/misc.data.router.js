const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/get-genders', (req, res) => {
    const queryText = `SELECT *
                        FROM "genders";`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT genders query', error);
            res.sendStatus(500);
        });
})

router.get('/get-countries', (req, res) => {
    const queryText = `SELECT *
                        FROM "countries";`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT countries query', error);
            res.sendStatus(500);
        });
})

module.exports = router;