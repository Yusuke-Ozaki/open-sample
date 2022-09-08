import React from "react"
import {BrowserRouter,Link,Switch,Route} from "react-router-dom"

export const Menu=()=>{
        return(
            <div>
                <Link to="/goods/create">
                    登録
                </Link>
                <Link to="/goods/list">
                    検索
                </Link>
            </div>
        )
}