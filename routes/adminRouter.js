const { Router } = require('express');
const {  Answer, User } = require('../models');

const adminRouter = Router();

app.param('token', function(req, res, next, token){
  console.log('token param is detected: ', token)
  findUserByToken(
    token,
    function(error, user){
      if (error) return next(error);
      req.user_id = user;
      return next();
    }
  );
});

app.get('/',function(req, res, next){
    return res.render('user', req.user);
  }
);
