const {Router}=require("express");
const  multer=require("multer");
const muterConfig=require("./Config/muter");
const Post=require("./Model/model");


const routes = Router();
routes.get("/list",async(req,res)=>{
     const listPost=await Post.find();

     return res.json({listPost});
});
routes.post("/post",multer(muterConfig).single('file'),async (req,res)=>{
  const {originalName:name,size,filename:key,url=''}=req.file;
  
  const post = await Post.create({
      name,
      size,
      key,
      url
    });

  return  res.json({post});
});
routes.delete("/post/:id",async(req,res)=>{

  const Delete=await Post.findById(req.params.id);
  if(!Delete)
    return  res.json({message:'id no exist in database'});
  else
  {
  await Delete.remove();
  return res.json({});
  }
});


module.exports=routes;