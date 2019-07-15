import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import {userRouter} from './routes/userRouter';
import {answerRouter} from './routes/answerRouter';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import WebpackMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import {  Answer, User } from 'models';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'));
app.use(express.static('public'));

const compiler = webpack(webpackConfig);
app.use(
    WebpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    })
);
app.use(WebpackHotMiddleware(compiler));

app.use(bodyParser.json());
app.use('/users', userRouter);

app.param('token', function(req, res, next, token){
  console.log('token param is detected: ', token)
  findUserByToken(
    token,
    function(error, user){
      if (error) return next(error);
      req.user = user;
      return next();
    }
  );
});

app.get('/',function(req, res, next){
    return res.render('user', req.user);
  }
);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(PORT, () => console.log(`up and running on port ${PORT}`));
