var express = require('express');
var router = express.Router();

router.get('/test', (req, res, next)=> {
    res.json({msg: 'posts home page rendered!'});
});

module.exports = router;
