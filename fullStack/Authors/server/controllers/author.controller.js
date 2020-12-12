const { Author } = require('../models/author.model');


// The method below is new
module.exports.createauthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

module.exports.getallauthors = (request, response) => {
    Author.find()
    .then(authors => response.json(authors))
    .catch(err => response.json(err))
}


module.exports.getauthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

module.exports.updateauthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedauthor => response.json(updatedauthor))
        .catch(err => response.json(err))
}

module.exports.deleteauthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}