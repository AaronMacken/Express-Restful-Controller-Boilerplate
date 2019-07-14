var db = require("../models");

// index route
exports.getThings = (req, res) => {
  db.Thing.find()
    .then(thingPromises => {
      res.json(thingPromises);
    })
    .catch(err => {
      res.send(err);
    });
};

// crete route
exports.createThing = (req, res) => {
  db.Thing.create(req.body)
    .then(newThing => {
      res.status(201).json(newThing);
    })
    .catch(err => {
      res.send(err);
    });
};

// show route
exports.getThing = (req, res) => {
  db.Thing.findById(req.params.thingId)
    .then(foundThing => {
      res.json(foundThing);
    })
    .catch(err => {
      console.log(err);
    });
};

// update route
exports.updateThing = (req, res) => {
  db.Thing.findOneAndUpdate({ _id: req.params.thingId }, req.body, { new: true })
    .then(thing => {
      res.json(thing);
    })
    .catch(err => {
      console.log(err);
    });
};

// destory route
exports.deleteThing = (req, res) => {
    db.Thing.remove({_id: req.params.thingId})
    .then(() => {
        res.json({message: "Item deleted"});
    })
    .catch((err) => {
        console.log(err);
    });
}

// export functions (make available to files that require them)
module.exports = exports;
