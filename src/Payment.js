import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import "./Payment.css"
import { useStateValue } from './StateProvider'

function Payment() {
  const [{basket, user}, dispatch] = useStateValue()
  return (
    <div className='payment'>
      <div className='payment__container'>
        {/* payment section */}
        <div className='payment_section'>
          <div className='payment__title'>
            <h3>Delivery address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>12322 REact Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Reviewing action */}
        <div className='payment_section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map ((item) => (
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price} 
                rating={item.rating}
              />
            ))}
          </div>   
        </div>

        {/* the actual payment method */}
        <div className='payment_section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div >
          <div className='payment__address'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment