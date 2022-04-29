let mongoose = require('mongoose');
const matiere = require('./matiere');
const users = require('./users');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    dateDeRendu: Date,
    titre: String,
    rendu: Boolean,
    eleveRef: {type: Schema.Types.ObjectId, ref: users},
    matiereRef: {type: Schema.Types.ObjectId, ref: matiere},
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
