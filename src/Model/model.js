const mongoose = require("mongoose");
const multer=require('multer');
mongoose.connect("mongodb+srv://jardielson:jardielson@cluster0.gqe6d.mongodb.net/dev?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const postSchema=new mongoose.Schema({
    name:String,
    size:Number,
    key:String,
    url:String,
    cratedAt:{
        type:Date,
    default:Date.now,
    }
});
  
postSchema.pre('save',function(){
   if(!this.url){
       this.url=`hhtp://localhost:8080/files/${this.key}`;
   }
});
 

module.exports=mongoose.model('Post',postSchema);