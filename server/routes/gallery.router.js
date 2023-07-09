const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/pool');
const pool = require("../modules/pool");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    sqlText = `SELECT * from "image_gallery"`
    
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            console.log('error getting gallery');
        });
}); // END GET Route

module.exports = router;