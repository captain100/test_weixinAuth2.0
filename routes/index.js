var express = require('express');
var passport = require('passport'), 
	 WechatStrategy = require('passport-wechat');

var router = express.Router();
router.use(passport.initialize());
passport.use(new WechatStrategy({
  appID: 'wxb4fb29266130bb85', 
  appSecret: '675f1cd7edfcaba17b987c44c83e0a6b', 
  client: 'wechat',
  callbackURL: 'http://sz.xiaoyun.com:3010/auth/wechat/callback',
  scope: 'snsapi_base',
  state: 'STATE'
}, function(accessToken, refreshToken, profile, done){
	console.log('accessToken =  '+ accessToken);
	console.log('refreshToken =  '+ refreshToken);
	console.log(profile);

  	return done(null, profile);
}));


router.get('/auth/wechat',passport.authenticate('wechat'));

router.get('/auth/wechat/callback', passport.authenticate('wechat', { 
  failureRedirect: '/' ,
  successReturnToOrRedirect:'/login'}
));



router.get('/', function (req, res) {
	res.send('ok');
});

router.get('/login',function(req,res){
  res.render('login');
})

router.post('/login',function(req,res){
  var username =  req.body.username;
  var password = req.body.password;
  console.log(username+'  '+password);
  if(username =='qiushi'&&password =='123'){
    res.json(200,{success:'ok'});
  }
})

module.exports = router;
