import React from 'react'
import { NavLink } from 'react-router'

export default function Card({image, title, description, date, author}) {
  return (
    <div className='rounded-lg shadow overflow-hidden'>
      <div className="">
        <div className="">
        <NavLink>
        <img src={image} alt=""  className='h-64 w-full object-cover'/>
            
        </NavLink>
        </div>
        <div className="" >
            <div className="flex  justify-between">
                <h3>{title}</h3>
                <p>{author}</p>
            </div>
            <p>{description}</p>

           <div className="">
           <p>{date}</p>
            </div> 
        </div>
      </div>
    </div>
  )
}
