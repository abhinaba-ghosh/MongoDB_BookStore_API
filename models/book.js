var mongoose=require('mongoose');

//Genre schema

var bookSchema=mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  genre:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  publisher:{
    type:String,
    required:true
  },
  pages:{
    type:String,
    required:true
  },
  price:{
    type:Number
  }

});

var Book=module.exports= mongoose.model('Book',bookSchema);

//Get Books

module.exports.getBooks=function(callback, limit){
  Book.find(callback).limit(limit);
};

//Get Books by Id

module.exports.getBooksById=function(id,callback){
  Book.findById(id,callback);
};


// Add Books
module.exports.addBooks=function(bookName,callback){
  Genre.create(bookName,callback);
};
