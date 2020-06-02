var express  = require('express'),
    bodyParser = require('body-parser');
    mongoose = require('mongoose');
    //var expressSanitizer = require('express-sanitizer');
var  app = express();
var methodOverride = require('method-override');

var blogRoute = require('./routes/blog');
    mongoose.connect('mongodb://localhost:27017/blogApp',{useNewUrlParser: true ,useUnifiedTopology: true});
    app.set('view engine', 'ejs');
    //treat this type of requests with this string as a delete or put req
        
        app.use(express.static('public'));
        app.use(bodyParser.urlencoded({extended:true}));
      //  app.use(expressSanitizer);
        app.use(methodOverride('_method'));
     
       
app.use(express.static('public'));




// app.get('/blogs',(req,res)=>{
//         Blog.find({},(err,blogsList)=>{
//                 if (err) {
//                        console.log("Error");
                        
//                 } else {

//                         // res.render('index',{blogsList:blogsList})
//                         //these are the same
//                         res.render('index',{blogsList})
//                 }
//         })
        
        
        
// })

// app.get('/blogs/new',(req, res)=>{
//                         res.render('new');
// })

// //create route
// app.post('/blogs',(req,res)=>{
        
        
        
        
        
//         Blog.create(req.body.blog,(err, newBlog)=>{
//                 if (err) {
//                                 res.render('new')                        
//                 } else {
//                         res.redirect('/blogs')
//                 }

//         })
// })

// //show 
// app.get('/blogs/:id',(req,res)=>{
//         var idFromLink = req.params.id;
//         Blog.findById(idFromLink,(err, foundBlog)=>{
//                 if (err) {
//                        res.send('blog not found')
//                 } else {
//                         res.render('show',{foundBlog})
//                 }

//         })
// })


// app.get('/blogs/:id/edit',(req,res)=>{
//         var id = req.params.id;
//         Blog.findById(id,(err, foundBlog)=>{
//                 if (err) {
//                        res.send('blog not found')
//                 } else {
//                         res.render('edit',{foundBlog})
//                 }

//         })


       

// })

// //update route

// app.put('/blogs/:id',(req,res)=>{
//         var id = req.params.id;
//                 Blog.findById(id,function(err,foundBlog) {
//                         foundBlog.title = req.body.blog.title;
//                         foundBlog.image = req.body.blog.image;
//                         foundBlog.body = req.body.blog.body;
                        
//                         foundBlog.save();
//                         res.redirect('/blogs')        
//                 });
//                 // Blog.findOneAndUpdate(id,req.body.blog,(err,updatedBlog)=>{
//                 //         if (err) {
//                 //                res.send(err) 
//                 //         } else {
//                 //               res.redirect('/blogs')  
//                 //         }

//                 // })

                
// })
// //delete route
// app.delete('/blogs/:id',function (req,res) {
//         id = req.params.id;
//         deleteBlogPost(id, req, res);
//         /*var id = req.params.id;
//         Blog.findOneAndDelete(id,req.body.blog,function(err,deletedBlog) {
//                 if (err) {
//                        res.send(err) 
//                 } else {
//                         res.redirect('/blogs')
//                 }
                
//         })
//         */
// })
// //get home page


// //route not found

// //delete function

// function deleteBlogPost(id, req ,res) {
        
//         Blog.findOneAndDelete(id,req.body.blog,function(err,deletedBlog) {
//                 if (err) {

//                 } else {
//                         res? res.redirect('/blogs') : null;
//                 }
                
//         })
        
// }





// example.save(function (err) {
//                 if (err) {
//                         console.log(err);
//                 } else {
//                         console.log("save to DB");
//                 }
                
// });


app.listen(80, ()=>  {

        console.log("server is running section 31 ");
    
    
    })

    app.use('/',blogRoute);