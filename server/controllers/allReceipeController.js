const Receipe = require('../models/allReceipe');

function postToAllReceipes (req, res) {
    const allReceipe = new Receipe(req.body);
    allReceipe.save(err => {
        if(err)
            res.status(500).json({message: {msgBody : 'error has occured132', msgError: true}});
        else
            res.status(200).json({message: {msgBody : 'post successful', msgError: false}});
    });
};

function getAllReceipes (req, res) {
    Receipe.find().sort({createdAt: -1})
    .then((results) => {
        res.send(results);
    })
    .catch((err) => console.log(err));
};

module.exports = {
    postToAllReceipes,
    getAllReceipes
};
