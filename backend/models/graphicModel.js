const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    type : String,
    svgCode : String,
    user : String,
    createdAt : Date,
});

module.exports = model( 'graphic', myschema );