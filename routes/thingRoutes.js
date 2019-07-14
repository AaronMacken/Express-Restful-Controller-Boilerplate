// dependency vars
var express = require("express"),
    router = express.Router();

// variable that references the exported functions listed in the given file
var helper = require("../helpers/crudFunctions");

// short hand code for creating multiple routes
// "/" is actually "/api/things" - as is defined in the applications main index.js file
// routes are provided with the call back function names listed in the helper file
router.route("/")
.get(helper.getThings)
.post(helper.createThing);

router.route("/:thingId")
.get(helper.getThing)
.put(helper.updateThing)
.delete(helper.deleteThing);

// export the router var that gives other files the ability to reach these routes
module.exports = router;