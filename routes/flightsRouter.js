const router = require('express').Router();
const flightController = require('../controllers/flightsController')

// 7 RESTFUL routes
// index: list all of a collection
// path:  /flights
router.get('/', flightController.index)

// new: display the form to create a recipe
// path:  /recipes/new
router.get('/new', flightController.new)

// show: display just one
// path:  /recipes/:id
router.get('/:id', flightController.show)

// create: add a new one to the collection
// POST /recipes
router.post('/', flightController.create)

// delete route: 
// DELETE localhost:3000/recipes/:id
router.delete('/:id', flightController.delete)


// edit route: GET /recipes/:id/edit
// show a form letting the user edit an individual thing
// pre-fill the form with the existing data

// update route: PUT /recipes/:id
// process the information from the edit form
// REPLACE the existing data in the model's array
// redirect back somewhere

module.exports = router; 