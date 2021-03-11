const mongoose = require('mongoose');
const { ObjectId } = require('mongoose')

const empregadoSchema = new mongoose.Schema({
    nome:  String,
    salario: Number,
    cargo: String,
},{timestamps: true});


module.exports = mongoose.model('Empregado', empregadoSchema);