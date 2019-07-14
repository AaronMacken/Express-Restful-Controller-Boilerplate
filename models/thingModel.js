// dependency var
const mongoose = require("mongoose");

// expected data for our db objects
var thingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name cannot be blank."
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

// create a model from the schema created above
var Thing = mongoose.model("Thing", thingSchema);

// export the database model (make it available to files that require it)
module.exports = Thing;