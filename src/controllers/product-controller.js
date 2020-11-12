'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
    .find({
         active: true 
        }, 'title price slug')
    .then(data => {
        //recuperar parametros do corpo da requisição
        res.status(200).send(data); 
    })
    .catch(e => {
        res.status(400).send(e);
    });
};

exports.post = (req, res, next) => {
    let product = new Product(req.body);
    product
        .save()
        .then(x => {
            //recuperar parametros do corpo da requisição
            res.status(201).send({ message: 'Produto cadastrado com sucesso!' }); 
        })
        .catch(e => {
            res.status(400).send({ message: 'Falha ao cadastrar o produto', data: e });
        });
};

exports.put = (req, res, next) => {
    const id = req.params.id; // recuperar parametros da url
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};
