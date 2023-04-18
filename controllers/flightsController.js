const FlightModel = require('../models/flightModel')
// 7 RESTful ROUTES
// 4 OPERATIONS CRUD
module.exports = {
    // async/await
    index: async (req, res)=>{
        const allFlights = await FlightModel.find()
        // We render the index template
        // We provide a CONTEXT object containing the flights data
        res.render('flights/index', {
            // The flightsModel has our data
            // We use its methods to access the data
            flights: allFlights
        })

    },
    new: (req, res)=>{
        res.render('flights/new')
    },
    create: async (req, res)=>{
        try{
            // Pull in the form data
        const flightToCreate = req.body;
        // Use the model to create based on the form data
        await FlightModel.create(flightToCreate);
        // Send the user back to a different page
        res.redirect('/flights');
        }catch(err){
            res.redirect('/flights/new');
        }
        
    },
    show: async(req, res)=>{
        try{
            const flightToShow = await FlightModel.findById(req.params.id);
        res.render(`flights/show`, {flight: flightToShow});
        }catch(err){
            console.log(error);
        }
        
    },
    delete: async (req, res)=>{
        let flightToDelete = await FlightModel.findByIdAndDelete(req.params.id)
        res.redirect('/flights');
    }
}