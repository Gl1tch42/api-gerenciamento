const mongoose = require('mongoose');
const { ObjectId } = require('mongoose')

const gastosSchema = new mongoose.Schema({
    origem:  String,
    nome: String,
    valor: Number,
    mes: String,
    ano: String,
},{timestamps: true});


module.exports = mongoose.model('Gastos', gastosSchema);