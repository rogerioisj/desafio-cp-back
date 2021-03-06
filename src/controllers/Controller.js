const Books = require('../model/BookSchema')

exports.test = (req, res) => {
    res.send("Teste no controller");    
}

exports.list = (req, res, next) => {
    Books.find().then((books) =>{
        res.send(books);
        console.log("A list request was happen")
    }).catch(next);
};

exports.add = (req, res, next) => {
    Books.create(req.body).then((books) => {
        res.send(books);
        console.log(" A new item was inserted on Database");
    }).catch(next);
};

exports.update = (req, res, next) => {
    Books.findByIdAndUpdate({_id:req.params.id}, req.body)
    .then(() => {
        Books.findOne({_id: req.params.id}).then((books) => {
            res.send(books);
            console.log('ID: ' + req.params.id + " was updated on Database");
        });
    }).catch(next);
};

exports.delete = (req, res, next) => {
    Books.findByIdAndRemove({_id:req.params.id}).then((books) => {
        res.send(books);
        console.log('ID: ' + req.params.id + " was removed from Database");
    }).catch(next);
};