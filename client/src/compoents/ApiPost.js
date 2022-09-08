import React,{useState,useEffect}from"react"
import axios from "axios"

const ApiPost=(data)=>{
  
axios.post('http://localhost:4000/create/', data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
}
export default ApiPost;
