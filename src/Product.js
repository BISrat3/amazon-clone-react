import React from 'react'
import './Product.css'

function Product(props) {
  return (
    <div className="product">
        <div className="product__info">
            <p> the lead</p>
            <p className="product__price">
                <small>
                    $
                </small>
                <strong>19.99</strong>
            </p>
            <div className="product__rating">
               <p>****</p> 
            </div>  
        </div>
        <img 
            src="https://images-na.ssl-images-amazon.com/images/I/71KcD5M502L._AC_UL900_SR615,900_.jpg" alt=""/>

        <button>
            Add to basket
        </button>
    </div>
  )
}

export default Product