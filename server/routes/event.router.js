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

// JOIN "hobby" ON "hobby"."id" = "person_hobby"."hobby_id";

/**
 * POST route template
 */
// router.post('/', (req, res) => {

// });

module.exports = router;