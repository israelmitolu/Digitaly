import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`bg-black rounded-[3rem] py-2 px-4 text-white uppercase ${className}`}>{children}</button>
  )
}

export default Button