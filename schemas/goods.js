var mongoose = require('mongoose');

var goodsSchemas = new mongoose.Schema({
  kind: Number,
  title: String,
  price: String,
  url: String
})

// goodsSchemas 模式的静态方法
goodsSchemas.statics = {
  fetch: function (cb) {
    return this
        .find({}).sort({"kind": 1})
        .exec(cb)
  },
  findByKind: function (kind, cb) {
    return this
        .find({kind: {"$in": [kind]}})
        .exec(cb)
  }
}

// 导出 goodsSchemas 模式
module.exports = goodsSchemas;