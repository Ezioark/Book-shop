import React from 'react'
import '../style/card.css'
export default function Card({item,handleClick}) {
    const {img,title,author,price} = item
  return (
    <div className='cards'>
   
 <div className='card_box'>
 <div className='img_box'>
        <img src={img} alt='img'/>
</div>
    <div className='details'>
      <p>{title}</p>
     <p>{author}</p>
     <p>&#8377;{price}</p>
     <button onClick={()=>handleClick(item)}>Add to Cart</button>
    </div>
        </div>
      
    </div>
  )
}
