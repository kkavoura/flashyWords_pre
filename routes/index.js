var express = require('express'),
    apiCalls = require('../public/javascripts/apicalls.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/words', function(req, res, next){
    res.render('words');
});

router.get('/quiz', function(req, res, next){
    res.render('quiz');
});

router.get('/about', function(req, res, next){
    res.render('about');
});

router.get('/login', function(req, res, next){
    res.render('login');
});

router.get('/languages', function(req, res, next){

    apiCalls.getAvailableLanguagesToFull().then(
        //success
        function(result){
            console.log('Sending data to client');
            res.send(result);
        },
        //failure
        function(err){
            console.log(err);
        }
    );
});

module.exports = router;