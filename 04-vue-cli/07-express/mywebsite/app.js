//引入核心模块
var express = require('express');
//引入系统的路径模块
var path = require('path');
//引入fav图标模块
var favicon = require('serve-favicon');
//引入记录访问日志的模块
var logger = require('morgan');
//引入cookie编码的模块
var cookieParser = require('cookie-parser');
//引入post请求的body编码
var bodyParser = require('body-parser');

//引入index路由文件
var index = require('./routes/index');
var users = require('./routes/users');

//生成一个web应用实例
var app = express();

// 设置视图引擎
//设置路由的模板位置
app.set('views', path.join(__dirname, 'views'));
//设置模板引擎是jade
app.set('view engine', 'jade');

//当你的favicon在/public目录下将下面的注释取消
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//把日志模块当中间件使用
app.use(logger('dev'));
//把bodyParser当中间件使用
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//把cookieParser当成中间件
app.use(cookieParser());
//设置网站的静态目录为public目录
app.use(express.static(path.join(__dirname, 'public')));

//把路由模块当中间件
app.use('/', index);
app.use('/users', users);

//捕获到404错误并跳转到这里处理
app.use(function(req, res, next) {
  //生成一个错误对象
  var err = new Error('Not Found');
  //设置状态码为404
  err.status = 404;
  next(err);
});

//错误处理
app.use(function(err, req, res, next) {
  //设置locals, 只在开发模式提供错误
  //locals对象里面的内容可以传递到前台模板中
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  //渲染错误页面
  res.render('error');
});

//导出app实例
module.exports = app;
