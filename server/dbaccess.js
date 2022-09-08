const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const goods = require('./src/goods/dbgoods');

mongoose.connect('mongodb://localhost/sampledb');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// create-userの設定
app.post('/api/v1/create-goods', (req, res) =>{
    if (!req.body){
        return res.status(500).send('reqest body empty.');
    }

    const instance = new goods();
    instance.name = req.body.name;
    instance.goods_id = req.body.goods_id;
    instance.size = req.body.size;
    instance.amount = req.body.amount;
    instance.memo = req.body.memo;
    // MongoDBに保存
    instance.save(function(err){
        if(!err) {
            return res.status(200).send('goods create success.');
        } else {
            return res.status(500).send('goods create faild.');
        }
    });
});

// get-all-userの設定
app.get('/', (req, res) =>{
    User.find(function(err, result){
        if(!err) {
            return res.json(result);
        } else {
            return res.status(500).send('get all user faild.');
        }
    });
});

// イベント待機
app.listen(4000, () => console.log('Listening on port 4000'));