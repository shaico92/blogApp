var express = require('express');
var router = express.Router();
var Blog = require('../models/blog');




// u = 'file:///c:/Users/myname/test.swf'
router.get('/',(req,res)=>{
    console.log();
        
    res.redirect('/blogs');
})

router.get('/blogs',(req,res)=>{
    Blog.find({},(err,blogsList)=>{
            if (err) {
                   console.log("Error");
                    
            } else {

                    // res.render('index',{blogsList:blogsList})
                    //these are the same
                    res.render('index',{blogsList})
            }
    })
    
    
    
})

router.get('/blogs/new',(req, res)=>{
                    res.render('new');
})

//create route
router.post('/blogs',(req,res)=>{
    
    
    
    
    
    Blog.create(req.body.blog,(err, newBlog)=>{
            if (err) {
                            res.render('new')                        
            } else {
                    res.redirect('/blogs')
            }

    })
})

//show 
router.get('/blogs/:id',(req,res)=>{
    var idFromLink = req.params.id;
    Blog.findById(idFromLink,(err, foundBlog)=>{
            if (err) {
                   res.send('blog not found')
            } else {
                    res.render('show',{foundBlog})
            }

    })
})


router.get('/blogs/:id/edit',(req,res)=>{
    var id = req.params.id;
    Blog.findById(id,(err, foundBlog)=>{
            if (err) {
                   res.send('blog not found')
            } else {
                    res.render('edit',{foundBlog})
            }

    })


   

})

//update route

router.put('/blogs/:id',(req,res)=>{
    var id = req.params.id;
            Blog.findById(id,function(err,foundBlog) {
                    foundBlog.title = req.body.blog.title;
                    foundBlog.image = req.body.blog.image;
                    foundBlog.body = req.body.blog.body;
                    
                    foundBlog.save();
                    res.redirect('/blogs')        
            });
            // Blog.findOneAndUpdate(id,req.body.blog,(err,updatedBlog)=>{
            //         if (err) {
            //                res.send(err) 
            //         } else {
            //               res.redirect('/blogs')  
            //         }

            // })

            
})
//delete route
router.delete('/blogs/:id',function (req,res) {
    id = req.params.id;
    deleteBlogPost(id, req, res);
    /*var id = req.params.id;
    Blog.findOneAndDelete(id,req.body.blog,function(err,deletedBlog) {
            if (err) {
                   res.send(err) 
            } else {
                    res.redirect('/blogs')
            }
            
    })
    */
})
//get home page


//route not found

//delete function

function deleteBlogPost(id, req ,res) {
    
    Blog.findOneAndDelete(id,req.body.blog,function(err,deletedBlog) {
            if (err) {

            } else {
                    res? res.redirect('/blogs') : null;
            }
            
    })
    
}



module.exports =router;
