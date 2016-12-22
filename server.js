var express = require('express')
var app = express()
var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/sendFile', upload.single('file1'), function(req, res) {
    console.log(req.file.size)
    res.json({'size': req.file.size + ' bytes'})
})

app.listen(8080, function() {
    console.log("listening on port 8080!")
})