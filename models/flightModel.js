const mongoose = require('mongoose')

// Create Schema
const flightSchema = new mongoose.Schema({
    airline:  {type: String,  enum:["American", "Continental","Delta", "United", "Jet Blue"] },
    airport:  {type: String,  enum:["AUS","DFW","SFO","SEO","JFK","LAX","OAK"] },
    flightNo: {type: Number,  min:[10, "Flight number out of range."], 
                              max: [9999,"Flight number out of range."],
                              required:true
              },
    departs:  {type: Date, default: ()=>{
        return Date.now() + 365*24*60*60*1000;
    }}
})
// Connect your schema to a Model
const Flight = mongoose.model('Flight', flightSchema)
// Export the model
module.exports = Flight