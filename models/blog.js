var mongoose =require('mongoose');




var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created : {type: Date, default: Date.now}


});
//heres the deal, i need to divide the code .
//all of my methods are in the same file , but i want to create a controller or something just for the DB 
// methods and use the index.js for the routing managment
var Blog = new mongoose.model('Blog',blogSchema);

module.exports = Blog;
