const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT "person"."name", "person"."dob", "person"."email",
    "person"."phone", "person"."hometown", "countries"."country_name", "genders"."gender", "person"."facebook_username", "person"."employer",
    "person"."job_title", "person"."food_preferences", "person"."preferred_transportation", "person"."comments"
    FROM "countries" 
        JOIN "person"
            ON "countries"."id"="person"."country_id"
        JOIN "genders"
            ON "genders"."id"="person"."gender_id";`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT person query', error);
            res.sendStatus(500);
        });
});

router.get('/get-events', (req, res) => {
    const queryText = `SELECT "id", "event_name", "event_start_date", "event_end_date",
                        "event_city", "event_country", "event_host", "event_description"
                        FROM "events"`;
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((error) => {
            console.log('Error completing SELECT event query', error);
            res.sendStatus(500);
        });
})

// "name", "dob", "email", "phone", 
//                         "hometown", "country_id", "gender_id", "facebook_username", 
//                         "employer", "job_title", "food_preferences", 
//                         "preferred_transportation", "comments"

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

router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM events WHERE id=$1`;
    pool.query(queryText, [req.params.id])
        .then((response) => {
            console.log(`server response: ${response}`);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Problem with deleting events: ${error}`);
            res.sendStatus(500);
        })
});

router.post('/register', (req, res) => {
    const registerEvent = req.body;
    const queryText = `INSERT INTO "registration" ("person_id", "event_id")                   
                    VALUES ($1, $2);`;
    const queryValues = [
        registerEvent.person_id,
        registerEvent.event_id,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('error in event registration post', err);
            res.sendStatus(500);
        });
});







module.exports = router;