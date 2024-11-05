import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/navbar.css';
export default function Navbar({size,setShow}) {
  return (
    <div>
      <nav>
        <div className='nav_bar' >
            <span className='shop' onClick={()=> setShow(true)}>
                Shopping Cart
            </span>
            <div className='cart' onClick={()=>setShow(false)}>
                <span>
                <i className="fa-solid fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
      </nav>

    </div> 
  )
}
