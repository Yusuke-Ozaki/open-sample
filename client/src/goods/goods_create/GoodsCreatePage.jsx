import React from "react"
import {BrowserRouter,Link,Switch,Route} from "react-router-dom"
import ApiPost from "../../compoents/ApiPost.js"
import {Appform} from "./Appform.tsx"
import {useForm} from'react-hook-form';
const Post = {
    title: [],
    content:[]
};
const{register,handleSubmit}=useForm<Post>({});
const onSubmit = (data=Post) => {
    console.log(data);
};
export const GoodsCreatePage=()=>{
        return(
            <div>
                登録のページ<br/>
                <Appform/>
                <Link to="">
                    メニュー
                </Link>
            </div>
        )
}