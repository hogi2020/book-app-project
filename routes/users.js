var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/mypage', function(req, res, next) {
  res.render('index', { title: '마이페이지', pageName: 'users/mypage.ejs' })
})

router.get('/update', function(req, res, next) {
  res.render('index', { title: '회원정보수정', pageName: 'users/update.ejs' })
})

module.exports = router;
