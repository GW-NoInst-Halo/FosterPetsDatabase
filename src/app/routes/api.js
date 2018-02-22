const express = require('express');
const router = express.Router();
const Animal = require('../models/animals');

//get a list of animals from the db
router.get('/animals', (req, res, next) => {
  res.send({type: 'GET'});
});

//add a new animal to the db
router.post('/animals', (req, res,next) => {
  Animal.create(req.body).then((animal) => {
    res.send(animal);
  }).catch(next);
});

//update an animal in the db
router.put('/animals/:id', (req, res, next) => {
  res.send({type: 'PUT'});
});

//delete an animal in the db
router.delete('/animals/:id', (req, res,next) => {
  Animal.findByIdAndRemove({_id: req.params.id}).then((animal) =>{
    res.send(animal);
  });
});

module.exports = router;