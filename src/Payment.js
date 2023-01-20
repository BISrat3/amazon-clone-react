import React, {useState, useEffect} from 'react'
import CheckoutProduct from './CheckoutProduct'
import "./Payment.css"
import { useStateValue } from './StateProvider'
import {Link, useHistory} from "react-router-dom"
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import axios from 'axios'

function Payment() {
  const [{basket, user}, dispatch] = useStateValue()
  const history = useHistory()
  const [processing, setProcessing] = useState('')
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [disabled, setDisabled]= useState(true)
  const [clientSecret, setClientSecret]= useState(true)


  const getBasketTotal = (basket) =>
		basket.reduce((amount, item) => item.price + amount, 0);

  const stripe = useStripe()
  const elements = useElements()

  useEffect(() =>{
    // generate the special stripe secret which allows us to change a customer.
    // 
    const getClientSecret = async () => {
      // we can make post or get request
      const response = await axios({
        method: 'post',
        // stripe expects the total in a currencies subunits:
        // if you are using dollar it expects you to change it into cents
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret()

  }, [basket])

  console.log("secret", clientSecret)

  console.log("The Secret is >> ", clientSecret)

  const handleSubmit = async (e) => {
    // do all 
    e.preventDefault()
    setProcessing(true)
    
    // it uses client secret which is central 
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
      // because it is promise something will comeback
      // some we destructing - it is stripe payment confirmation built in which is promise
    }).then(({paymentIntent}) => {
      // payment intent = payment confirmation

      // if everthing is correct or true
      setSucceeded(true)
      setError(null)
      setProcessing(false)

      dispatch({
        type: 'EMPTY_BASKET'
      })
      history.replace('/orders')
    })
  }

  const handleChange = (e) => {
    // listen for changes in the CardElement
    // and display any errors as the customer types their card details
    console.log(e);
    // if the event is empty disable the button
    setDisabled(e.empty);
    // if there is an error display the error other wise display empty string
    setError(e.error ? e.error.message : "");
  }

  return (
    <div className='payment'>
      <div className='payment__container'>
        {/* payment section */}
        <h1>
          Checkout (
            <Link to="/checkout">{basket?.length}items</Link>
          )
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>12322 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Reviewing action */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
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
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div >
          <div className='payment__details'>
              {/* Stripe magic */}
              <form onSubmit={handleSubmit}>
                <CardElement  onChange={handleChange}/>
                <div className='payemnt__priceContainer'>
                  <CurrencyFormat
                    renderText={(value) => 
                      <p>
                         <h3>Order Total: {value}</h3>
                      </p>
                    }
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button 
                    disabled={processing || disabled || succeeded}>
                      <span>{processing ? <p>Processing</p>: "Buy now"}</span>
                  </button>
                </div>
                {/* {Err0r} */}
                {error &&< div>{error}</div> }
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment