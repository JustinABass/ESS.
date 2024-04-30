import React, {useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/user'

export default function ProductsCard({ product }) {
  const { user, setUser, handleAddToCart, handleUpdateCart} = useContext( UserContext )
  const [quantity, setQuantity ] = useState(1)



  const handleIncrement = () => {
    setQuantity( quantity + 1)
  }

  const handleDecrement = () =>{
    if(quantity >= 1){
      setQuantity( quantity - 1 )
    }
  }


    return (
      <div>
          <img src={ product.img } width='250' height='250'/>
          <h2>${ product.price }</h2>

          <button onClick={ () => handleDecrement()}> - </button>
          <br/>
          <h3>{ quantity }</h3>
          <br/>
          <button onClick={ () => handleIncrement()}> + </button>
          <br/>
          <button onClick={() => {
           handleAddToCart(product, quantity, user, setUser)
           handleUpdateCart(product, quantity, user, setUser)

          }}> Add </button>
      </div>
    )
  }
