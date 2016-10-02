var express = require('express');
var router = express.Router();

/* GET my famliy home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'My Famliy', 
                      message: 'This is the home page of my famliy'
                      });
});

/* GET Liwei page. */
router.get('/Liwei', function(reg, res, next) {
res.render('Liwei', { title: 'Liwei', 
                      message: 'Liwei is my mother.'
                      });
});

/* GET Guowen page. */
router.get('/Guowen', function(reg, res, next) {
res.render('Guowen', { title: 'Guowen', 
                      message: 'Guowen is my father.'
                      });
});

/* GET Honglin page. */
router.get('/Honglin', function(reg, res, next) {
res.render('Honglin', { title: 'Honglin', 
                      message: 'I am Honglin who is a student of Georgian College.'
                      });
});

module.exports = router;