import React from 'react'
import list from '../list.js'
import Card from './Card.jsx'
export default function Shop({handleClick}) {
  return (
    <div>
       <section>
        {list.map((item)=>{
         return <Card item={item} key={item.id} handleClick={handleClick}/> 
        })}
       </section>
    </div>
  )
}
