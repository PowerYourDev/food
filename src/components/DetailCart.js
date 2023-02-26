import React from 'react'
import {useEffect,useState} from "react"
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import {IMG_CDN_URL} from "../contants.js"
import { useDispatch } from 'react-redux';
import {additem} from "../redux/cartSlice"

function DetailCart() {
const {id}=useParams();
console.log(id)
  const[detailData,setDetailData]=useState(null)

  useEffect(()=>{
    detailCard()
  },[])

 async function detailCard(){
    const data= await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=17.385044&lng=78.486671&menuId=" + id);
    const detailCardData=await data.json();
    console.log(detailCardData)
    setDetailData(detailCardData.data)
  }
 const dispatch= useDispatch()
 const addCart=(x)=>{
  dispatch(additem(x))
 }


 if(!detailData){
  return <Shimmer/>
 }else{
  
  return  (
    <>
  <h1>{detailData?.name}</h1>
  <img src={IMG_CDN_URL + detailData.cloudinaryImageId} alt="img has to load" />
   {console.log(detailData.menu)}

   {
  Object.values(detailData.menu.items).map((x)=> {return  <li key={x.id}>{x.name} <button onClick={()=>{addCart(detailData)}}>add +</button></li> 


  }  )
  }

    </>
  )
  
 
}
 }


export default DetailCart;