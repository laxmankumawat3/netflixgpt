import React from 'react'


const ProductItem = (props) => {
    const  {
        title, price, description, category , image
    } = props.item
    
  return (
    <div>
       product item is here
      <div>
        <img src ={image} />
        <h1>{title}</h1>

        <p>{price}</p>
        <p>{description}</p>
        <p>{category}</p>
       
      </div>
    </div>
  )
}

export default ProductItem
