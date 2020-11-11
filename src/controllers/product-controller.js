'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
    let product = new Product(req.body);
    product
        .save()
        .then(x => {
            res.status(201).send({ message: 'Produto cadastrado com sucesso!' }); //recuperar parametros do corpo da requisição
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
