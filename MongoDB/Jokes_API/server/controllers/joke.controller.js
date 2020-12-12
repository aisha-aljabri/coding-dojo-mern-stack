const Joke = require("../models/joke.model");


//Export a function to get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(allJokes => res.json({ jokes: allJokes}))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};

//Export a function to get a single joke
module.exports.findonejoke = (req, res) => {
    Joke.findOne({_id: req.params._id})
    .then(onejoke => res.json({ joke: onejoke}))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};


//Export a function to create a joke
module.exports.Createjoke = (req, res) => {
    Joke.create(req.body)
    .then(newjoke => res.json({joke: newjoke}))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
      .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

//Export a function to update a joke
module.exports.updatejoke = (req, res) => {
    Joke.findOne({_id: req.params._id}, req.body, { new: true})
    .then(updateJoke => res.json({ joke: updateJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};

//Export a function to delete a joke
module.exports.deletejoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
    .then(result => res.json({ result: result}))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};