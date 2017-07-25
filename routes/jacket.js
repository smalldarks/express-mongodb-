var express = require('express');
var router = express.Router();
var goods = require('../models/goods.js'); // 载入mongoose编译后的模型movie

router.get('/', function(req, res) {
  goods.findByKind('2', function(err, goods) {
    if (err) {
        console.log(err);
    }
    res.render('jacket',{
        goods: goods
    })
  })
})


module.exports = router;

/*router.get('/', function(req, res) {
  res.render('jacket', {goods: [
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'},
    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365611160,2639098405&fm=117&gp=0.jpg', title: '美美的上衣', price: '49元'}
  ]})
})*/