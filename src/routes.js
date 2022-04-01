const res = require('express/lib/response');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = require('express').Router();

routes.post("/posts", multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file);
    
    return res.json({ hello: "World" });
});

module.exports = routes;