const AuthorController = require('../controllers/author.controller');

module.exports = function(app){

    app.post('/authors/new', AuthorController.createauthor);
    app.get('/authors', AuthorController.getallauthors);
    app.put('/authors/:id', AuthorController.updateauthor);
    app.delete('/authors/:id', AuthorController.deleteauthor);
    app.get('/authors/:id', AuthorController.getauthor);
}