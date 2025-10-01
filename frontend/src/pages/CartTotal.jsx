import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const CartTotal = () => {
  const {getCartAmount, currency, delivery_charges} = useContext(ShopContext)
  return (
    <section className='w-full'>
      <Title title1={'Cart'} title2={'Total'} title1Styles={'h3'} />
      <div className="">
        <h5>SubTotal:</h5>
        <p>{currency}{getCartAmount()}.00</p>
      </div>
    </section>
  )
}

export default CartTotal
