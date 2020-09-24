const express = require('express');
const router = express();
const api = require('./api');
let path = require("path");
const multer  = require('multer')

const uploadFile = require("./upload_image");

router.post("/upload", uploadFile.single("image"), api.uploadFileMulter);

router.post('/', api.uploadFileFormidable);

module.exports = router;