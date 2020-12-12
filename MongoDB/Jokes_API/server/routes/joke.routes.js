const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:_id", JokeController.findonejoke);
    app.post("/api/jokes/new", JokeController.Createjoke);
    app.put("/api/jokes/update/:_id", JokeController.updatejoke);
    app.delete("/api/jokes/delete/:_id", JokeController.deletejoke);
};