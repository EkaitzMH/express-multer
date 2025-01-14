var express = require('express');
var router = express.Router();
var path = require('path');
const multer  = require('multer')

const storage = multer.diskStorage({destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public/uploads'))},
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
      }
})

const upload = multer({ storage: storage })
/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('form.html');
});

router.post('/', upload.single('avatar'), function (req, res, next) {
    console.log(req.file)
    // req.body will hold the text fields, if there were any
    res.send("Jasota")
})


module.exports = router;
