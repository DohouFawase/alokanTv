import React from 'react'
import Live from './live'

export default function StreamContentent() {
  return (
    <div>
      <div className="">
        <div className="">
            <div className="grid grid-cols-3 gap-3">
                
                <div className="bg-amber-100 h-[35rem] col-span-2 row-span-5 rounded-lg "></div>
                <div className="bg-amber-100  col-span-1 h-[8rem] w-64 rounded-lg  "></div>
                <div className="bg-amber-100  col-span-1 h-[8rem] w-64 rounded-lg  "></div>
                <div className="bg-amber-100  col-span-1 h-[8rem] w-64 rounded-lg  "></div>
                <div className="bg-amber-100  col-span-1 h-[8rem] w-64 rounded-lg  "></div>
               
            </div>
            <Live />
        </div>
      </div>
    </div>
  )
}
