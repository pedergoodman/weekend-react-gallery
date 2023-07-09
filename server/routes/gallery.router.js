const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/pool');
const pool = require("../modules/pool");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/:id', (req, res) => {
    // console.log(req.params);
    const galleryId = req.params.id;

    const sqlText = `
        UPDATE "image_gallery"
        SET "likes" = "likes" + 1
        WHERE "id" = $1`

    pool.query(sqlText, [galleryId])
        .then((result) => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log('error getting gallery');
        });

    }
    
); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    sqlText = `SELECT * from "image_gallery" ORDER BY "id"`
    
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            console.log('error getting gallery');
        });
}); // END GET Route

module.exports = router;