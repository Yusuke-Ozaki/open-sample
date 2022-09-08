const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goods =new Schema({
    name:[],
    goods_id:[],
    size:[],
    amount:[],
    memo:[]
})

module.exports = mongoose.model('goods', goods);