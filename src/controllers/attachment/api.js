var formidable = require('formidable');
var fs = require('fs'); 
var express = require('express');
var app = express(); 

function uploadFileFormidable(req, res){
    if(req.method.toLowerCase() == 'post'){
        //parse file upload
        //const form = formidable({multiples: true});
        //khoi tao bien form de phan tich file upload
        let form = new formidable.IncomingForm();

        //con file luu anh
        form.uploadDir = "public/image_formidable";

        form.parse(req, (err, fields, files) => {
            // Lấy ra đường dẫn tạm của tệp tin trên server
            let tmpPath = files.image.path;

            // Khởi tạo đường dẫn mới, mục đích để lưu file vào thư mục uploads của chúng ta
            let newPath = form.uploadDir + '/' + files.image.name;
            let temp = newPath;
            files.image.path = temp.split('/').slice(1).join('/');
            fs.rename(tmpPath, newPath, (err) => { //doi duong dan de luu file
                 if (err) throw err;
                res.writeHead(200, { 'content-type': 'application/json' });
                console.log('thanhcong');
                 res.end(JSON.stringify({ fields, files }, null, 2));
                
            })
          });
          
        return;
    }
}

//--------------------------------------------------------------------------------------
function uploadFileMulter(req, res){
    res.send(req.file);
    console.log('thanh cong');
}


module.exports = {
    uploadFileFormidable,
    uploadFileMulter
}