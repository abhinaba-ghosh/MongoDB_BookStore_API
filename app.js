var express=require('express');
var bodyparser=require('body-parser');
var mongoose=require('mongoose');


var app=express();

app.use(bodyparser.json());


Genre=require('./models/genre.js');
Book=require('./models/book.js');

//connect to mongoose
mongoose.connect('mongodb://localhost/BookStoreDb');
var db=mongoose.connection;

app.get('/',function(req,res){
  res.send("hello world");
});


//genre collection operations
app.get('/api/genres',function(req,res){
  Genre.getGenres(function(err,genres){
    if(err){
      throw(err);
    }
    res.json(genres);
  });
});


app.post('/api/genres',function(req,res){
  var genreName=req.body;
  Genre.addGenres(genreName,function(err,genres){
    if(err){
      throw(err);
    }
    res.json(genreName);
  });
});



// book collection operations
app.get('/api/books',function(req,res){
  Book.getBooks(function(err,books){
    if(err){
      console.log(err);
    }
    res.json(books);
  });
});

app.get('/api/books/:_id',function(req,res){
  Book.getBooksById(req.params._id,function(err,book){
    if(err){
      console.log(err);
    }
    res.json(book);
  });
});


//App Listen to this port
app.listen(8089, function () {
  console.log('Example app listening on port 8089!')
});
