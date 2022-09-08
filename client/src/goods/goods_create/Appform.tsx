 import React from 'react';
import ApiPost from '../../compoents/ApiPost';

import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  goods_id: string;
  size: string;
  amount: string;
  memo: string;
};

export const Appform = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    {ApiPost(data)}
    alert('登録しました');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            商品名:
            <input {...register('name')} />
        </label><br/>
        <label>
            商品ID:
            <input {...register('goods_id')}/>
        </label><br/>
        <label>
            サイズ: 
            <input {...register('size')}/>
        </label><br/>
        <label>
            数量:   
            <input {...register('amount')}/>
        </label><br/>
        <label>
            メモ:  
           <input {...register('memo')}/>
        </label><br/>

        <button type="submit">登録</button>
    </form>
  );
};
