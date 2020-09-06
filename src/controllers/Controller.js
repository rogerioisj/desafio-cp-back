const Books = require('../model/BookSchema')

exports.test = (req, res) => {
    res.send("Teste no controller");    
}

exports.details = (req, res) => {
    res.send({type: `GET`});
};

exports.add = (req, res, next) => {
    Books.create(req.body).then((books) => {
        res.send(books);
        console.log('ID: ' + req.params.id + " inserted on Database")
    }).catch(next);
};

exports.update = (req, res, next) => {
    Books.findByIdAndUpdate({_id:req.params.id}, req.body)
    .then(() => {
        Books.findOne({_id: req.params.id}).then((books) => {
            res.send(books);
            console.log('ID: ' + req.params.id + " updated on Database")
        });
    }).catch(next);
};

exports.delete = (req, res, next) => {
    Books.findByIdAndRemove({_id:req.params.id}).then((books) => {
        res.send(books);
        console.log('ID: ' + req.params.id + " removed from Database")
    }).catch(next);
};