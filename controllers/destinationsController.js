const Flights = require("../models/flightModel");

const destinationsController = {
    create: async (req, res) => {
        const flightToUpdate = await Flights.findById(req.params.flight_id);
        const destinationToCreate = req.body;
        console.log(req.body);
        flightToUpdate.destinations.push(destinationToCreate);
        await flightToUpdate.save();
        res.redirect(`/flights/${req.params.flight_id}`);
    }
}

module.exports = destinationsController;