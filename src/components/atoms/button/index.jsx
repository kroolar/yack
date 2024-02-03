import React from 'react'

const Button = ({
  children,
  className = '',
  size = 'md',
  text,
  onClick
}) => (
  <button
    className={`border-2 border-black text-black font-medium h-10 leading-none p-2 px-3 rounded duration-300 hover:bg-black hover:text-white ${className}`}
    onClick={onClick}
  >
    {text || children}
  </button>
)

export default Button
