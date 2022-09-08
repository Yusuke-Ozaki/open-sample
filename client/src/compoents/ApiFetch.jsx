import React,{useMemo,useState,useEffect}from"react"
import {BrowserRouter,Link,Switch,Route} from "react-router-dom"
import axios from "axios"

const ApiFetch=()=>{
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get(
            'http://localhost:4000/find',
            {
                withCredentials: true})
                .then(res =>{
                    setPosts(res.data)
                })
            },[])

    return(
        <div>
            <ul>
                {
                posts.map(post => <li key={post.goods_id}> 商品名：{post.name}
                    <Link to={{pathname:"/detailsPage/",state:post}}>詳細</Link> 
                   </li>)
                }
            </ul>
    
        </div>
    )
}

export default ApiFetch