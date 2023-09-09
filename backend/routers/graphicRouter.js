const express = require('express')
const Model = require('../models/graphicModel');
const { model } = require('mongoose');

const router = express.Router();

//ADD
router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.status(500).json(err); 
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//getall
router.get('/getall', (req, res) => {
    
    Model.find({})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//GetById
router.get('/getbyid/:id', (req, res) => {

    // Model.findOne({_id : req.params.id})
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Delete
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


//Update

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;