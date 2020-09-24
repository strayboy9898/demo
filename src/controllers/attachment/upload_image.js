const express = require('express');
const multer  = require('multer')

let diskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
      // Định nghĩa nơi file upload sẽ được lưu lại
      callback(null, "public/image_multer/");
    },
    filename: (req, file, callback) => {
      // Tên của file thì mình nối thêm một cái nhãn thời gian để đảm bảo không bị trùng.
      let filename = `trung-${file.originalname}`;
      callback(null, filename);
    }
  });

let uploadFile = multer({storage: diskStorage});

module.exports = uploadFile;