import React from 'react'

export default function Button({children, type="", className}) {
  return (
    <div>
      <button className={`${className}`}>
        {children}
      </button>
    </div>
  )
}
