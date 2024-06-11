import React, { FC } from 'react'

const Button:FC<{text:string}> = ({text}) => {
  return (
    <div className='bg-teal-700 text-white px-8 py-4 w-40 rounded-full hover:shadow-lg 
    text-lg font-medium hover:scale-105 duration-700
    '>{text}</div>
  )
}

export default Button