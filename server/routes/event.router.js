const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT "name", "dob", "email", "phone", 
    "hometown", "country_id", "gender_id", "facebook_username", 
    "employer", "job_title", "food_preferences", 
    "preferred_transportation", "comments"
    FROM "person"`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT query', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const createEvent = req.body;
    const queryText = `INSERT INTO "events" ("event_name", "event_start_date", 
                     "event_end_date", "event_city", "event_country", "event_host", "event_description")                   
                    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    const queryValues = [
        createEvent.event_name,
        createEvent.event_start_date,
        createEvent.event_end_date,
        createEvent.event_city,
        createEvent.event_country,
        createEvent.event_host,
        createEvent.event_description
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('error in event post', err);
            res.sendStatus(500);
        });
});


// JOIN "hobby" ON "hobby"."id" = "person_hobby"."hobby_id";




module.exports = router;