import * as Express from 'express';
import noImpl from './noImpl';
import article from './article';

const router = Express.Router();

// ユーザの新規作成
router.post('/new', noImpl);

// ユーザ情報の取得
router.get('/:user', noImpl);

// ユーザの情報更新
router.put('/:user', noImpl);

// ユーザの削除
router.delete('/:user', noImpl);

// ユーザ毎の記事表示用ルーティング
router.use('/:user/article', article);

export default router;