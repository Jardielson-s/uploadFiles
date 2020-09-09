

const multer = require("multer");
const path=require("path");
const crypto=require("crypto");
module.exports={
dest:path.resolve(__dirname,'..','tmp','uploads'),
storage:multer.diskStorage({
   destination:(req,file,cb)=>{
       cb(null,path.resolve(__dirname,'..','tmp','uploads'));
   },
   __filename:(req,file,cb)=>{
       crypto.randomBytes(16,(err,hash)=>{
            if(err)cb(err);

            const filename= `${hash.toString('hex')}-${file.originalname}}`;

            cb(null, filename);
       });
   }
}),limits:{
       fileSize:2*10244*1024
},filefilter:(req,file,cb)=>{
    const allowedMimes=[
       'image/jpeg',
       'image/pjpeg',
       'image/png',
       'image/gif',
    ];
    if(allowedMimes.includes(file.mimetype)){
        cb(null,true);
    }else{
        cb(new Error('invalid file type.'))
    }
}

};