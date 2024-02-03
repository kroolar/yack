import React from 'react'

const Toggle = ({
  onChange,
  value
}) => (
  <div className={`duration-300 h-10 rounded-full w-20 border-2 border-black flex items-center ${value ? 'bg-black' : 'bg-white'}`}>
    <div className={`duration-300 bg-black h-7 rounded-full w-7 ${value ? 'bg-white ml-11' : 'bg-black ml-1'}`} />
  </div>
)

export default Toggle
