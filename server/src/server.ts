// // import * as Express from 'express';
// import expressListEndpoints from 'express-list-endpoints';
// import article from './routes/articles';
// import auth from './routes/auth';
// import user from './routes/user';
// import goods from './goods/goods';
// const express = require('express');
// const cors = require('cors');
// const app = express();
// app.use(cors({
//     origin: 'http://localhost:3000', //アクセス許可するオリジン
//     credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
//     optionsSuccessStatus: 200 //レスポンスstatusを200に設定
// }))
// // app.use('/article', article);
// // app.use('/auth', auth);
// // app.use('/user', user);
// //app.use('/goods', goods);

import { dbName } from "./mongodb";





const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const goods=require('../model/goods')
app.use(cors({
    origin: 'http://localhost:3000', //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))


mongoose.connect('mongodb://localhost:27017/sampledb');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//create-goodsの設定
app.post('/create', (req, res) =>{
    if (!req.body){
        return res.status(500).send('reqest body empty.');
    }
    const instance = new goods();
    instance.name = req.body.name;
    instance.goods_id = req.body.goods_id;
    instance.amount = req.body.amount;
    instance.size = req.body.size;
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
app.get('/find', (req, res) =>{
    goods.find(function(err,result){
        if(!err) {
            return res.json(result);
        } else {
            return res.status(500).send('get all user faild.');
        }
    })
});
// get-id-userの設定
app.get('/find/:id', (req, res) =>{
    const param=req.param.id;
    goods.find({id:param},function(err,result){
        if(!err) {
            return res.json(result);
        } else {
            return res.status(500).send('get :id user faild.');
        }
    })
});
// update-userの設定
app.post('/update', (req, res) =>{
    const newPost=req.body;
    goods.findByIdAndUpdate(newPost,function(err,result){
        res.send("update")
    })
});


// イベント待機
app.listen(4000, () => console.log('Listening on port 4000'));