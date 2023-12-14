var mongoose = require("mongoose");

var bookSchema = mongoose.Schema({
    Title:String,
    Author:String,
    Genre:String,
});

const book= mongoose.model("Staff-Data",bookSchema);
module.exports= book;
