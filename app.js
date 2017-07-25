var express = require('express');    // 引入express框架
var path = require('path');          // 引入path模块
var routes = require('./routes/app');// 引入路由模块
var port = process.env.PORT || 8000; // 设置端口号：8000

var app = express();                 //实例化express

var serveStatic = require('serve-static');  // 静态文件处理
app.use(serveStatic('public')); // 路径：public

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port);                    // 启动web服务。

var mongoose = require('mongoose'); // 加载mongoose模块
mongoose.connect('mongodb://localhost:27017/goods'); // 连接mongodb本地数据库imovie
console.log('MongoDB connection success!');
/*  mongoose 简要知识点补充
* mongoose模块构建在mongodb之上，提供了Schema[模式]、Model[模型]和Document[文档]对象，用起来更为方便。
* Schema对象定义文档的结构（类似表结构），可以定义字段和类型、唯一性、索引和验证。
* Model对象表示集合中的所有文档。
* Document对象作为集合中的单个文档的表示。
* mongoose还有Query和Aggregate对象，Query实现查询，Aggregate实现聚合。
* */


routes(app);

console.log('server listening at ' + port);