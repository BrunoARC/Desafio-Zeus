const express = require("express");
const RacaoController = require("./controller/racaoController")
const routes = express.Router()



routes.post('/racao', function(req , res, next){
    let valor = req.query.valor.split(' ')
    let db = require('/index.js');
    let Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
    //Customer.find({ tags: { $all: searchParams } }, function (e, docs) {
        //res.render('index', { results: true, search: req.query.query, list: docs });
})
module.exports = routes

