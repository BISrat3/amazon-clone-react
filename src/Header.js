import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header__logo'>
        <img 
            className='header'
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        <div 
            className="header__search"
        >
            <input 
                className='header__serachInput'
                type="text"
            />
                {/* {logo} */}
        </div>
        <div className="header__nav">
            <div className='header_option'>
               <span className='header__optionLineOne'>
                    Hello Guest
               </span>
            </div>
            <div className='header_option'>
                <span className='header__optionLineTwo'>
                        Hello signin
                </span>
            </div>
            <div className='header_option'>
                <span className='header__optionLineOne'>
                        Returns
                </span>
                <span className='header__optionLineTwo'>
                        & Orders
                </span>
            </div>
            <div className='header_option'>
                <span className='header__optionLineOne'>
                        Your
                </span>
                <span className='header__optionLineTwo'>
                        Prime
                </span>
            </div>
        </div>
    </div>
  )
}

export default Header