const express= require("express");
const morgan=require("morgan");
const routes=require("./routes");
const app=express();
const path=require('path');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(routes);
app.use('/files',express.static(path.resolve(__dirname,'..','tmp','uploads')));


app.listen(8080);