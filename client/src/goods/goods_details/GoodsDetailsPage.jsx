import React from "react"
import {Link,useLocation} from "react-router-dom"
import ApiFetch from "../../compoents/ApiFetch.jsx"

export const GoodsDetailsPage=()=>{
    const{state}=useLocation();
    console.log(state);
        return(
            <div>
                <h1>商品詳細</h1><br/>
                商品名:{state.name}<br/>
                商品ID:{state.goods_id}<br/>
                サイズ:{state.size}<br/>
                数量:{state.amount}<br/>
                メモ:{state.memo}<br/>
                <Link to="">
                    メニュー
                </Link>
            </div>
        )
}