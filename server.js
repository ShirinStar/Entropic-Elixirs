import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import { userRouter } from './routes/userRouter';
import { answerRouter } from './routes/answerRouter';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import WebpackMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import cookieParser from 'cookie-parser';

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

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/users', userRouter);

app.get('/', function (req, res, next) {
  return res.render('user', req.user);
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(PORT, () => console.log(`up and running on port ${PORT}`));
