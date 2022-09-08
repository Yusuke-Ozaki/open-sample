import React from "react"
import {BrowserRouter,Link,Switch,Route} from "react-router-dom"
import ApiFetch from "../../compoents/ApiFetch.jsx"

export const GoodsListPage=()=>{
        return(
            <div>
                商品リスト<br/>
                <ApiFetch/>
                <Link to="">
                    メニュー
                </Link>
            </div>
        )
}