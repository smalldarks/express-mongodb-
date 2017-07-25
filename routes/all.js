var express = require('express');
var router = express.Router();
var goods = require('../models/goods.js'); // 载入mongoose编译后的模型movie

router.get('/', function(req, res) {
  goods.fetch(function(err, goods) {
    if (err) {
        console.log(err);
    }
    res.render('all',{
        goods: goods
    })
  })
})

module.exports = router;

/*
    res.render('all', {goods: [
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'},
    {url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生裙子', price: '49元'}
  ]})

  db.goods.insert({url: 'https://img.alicdn.com/imgextra/i3/1020250042/TB2qHT5pypnpuFjSZFkXXc4ZpXa_!!1020250042-0-beehive-scenes.jpg_180x180q70', title: '女生上衣', price: '229元', kind: 1})
  创建集合：db.createCollection('goods')
 */