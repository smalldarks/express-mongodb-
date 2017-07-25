var express = require('express');
var router = express.Router();
var goods = require('../models/goods.js'); // 载入mongoose编译后的模型movie

router.get('/', function(req, res) {
  goods.findByKind('3', function(err, goods) {
    if (err) {
        console.log(err);
    }
    res.render('pants',{
        goods: goods
    })
  })
})

module.exports = router;

/*router.get('/', function(req, res) {
  res.render('jacket', {goods: [
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
    {url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'}
  ]})
})
*/
//db.goods.insert({url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '女生短裤', price: '154元', kind: 3})
