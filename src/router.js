const express = require('express');
const router = express();

const attachment = require("./controllers/attachment/router");
router.use('/attachment', attachment);

module.exports = router;