var express = require('express');
var router = express.Router();
var goods = require('../models/goods.js'); // 载入mongoose编译后的模型movie

router.get('/', function(req, res) {
  goods.findByKind('4', function(err, goods) {
    if (err) {
        console.log(err);
    }
    res.render('discount',{
        goods: goods
    })
  })
})

module.exports = router;


/*{goods: [
    {url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3663715146,1860018343&fm=80&w=179&h=119&img.JPEG', title: '米格-31', price: '特价49元'},
    {url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3663715146,1860018343&fm=80&w=179&h=119&img.JPEG', title: '米格-31', price: '特价49元'},
    {url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3663715146,1860018343&fm=80&w=179&h=119&img.JPEG', title: '米格-31', price: '特价49元'},
    {url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3663715146,1860018343&fm=80&w=179&h=119&img.JPEG', title: '米格-31', price: '特价49元'},
    {url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3663715146,1860018343&fm=80&w=179&h=119&img.JPEG', title: '米格-31', price: '特价49元'},
    {url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3663715146,1860018343&fm=80&w=179&h=119&img.JPEG', title: '米格-31', price: '特价49元'},
    {url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3663715146,1860018343&fm=80&w=179&h=119&img.JPEG', title: '米格-31', price: '特价49元'},
    {url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3663715146,1860018343&fm=80&w=179&h=119&img.JPEG', title: '米格-31', price: '特价49元'},
    {url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3663715146,1860018343&fm=80&w=179&h=119&img.JPEG', title: '米格-31', price: '特价49元'}
]}*/
//db.goods.insert({url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '女生短裤', price: '154元', kind: 3})