import * as Express from 'express';
// import noImpl from '../../nolmpl';

const router = Express.Router();


const goodsList = [
    { name: '商品1', goods_id: '1', size: 100, amount: 1000, memo: '説明' },
    { name: '商品2', goods_id: '2', size: 10, amount: 10, memo: '説明' }
]


router.get('/', (req, res) => {
    res.send(goodsList);
});


export default router;