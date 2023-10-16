import React,{useEffect, useState} from 'react'
import ProductItem from './ProductItem';

const Product = () => {
 const [products , setProducts] = useState([null])

   

    // API for get requests 
    useEffect(()=>{
        let fetchRes = fetch( 
            "https://fakestoreapi.com/products"); 
            // fetchRes is the promise to resolve 
            // it by using.then() method 
            fetchRes.then(res => 
                res.json()).then(d=>{
                setProducts(d);
                })
                
            },[])
          
  return (
    <>
        {
          products.length !== 0 &&
          products.map((item , id)=>{

            return  <ProductItem key = {id} item = {item}  />
          })
            
        }
       </>
  )
}

export default Product
