import React from 'react'

const Icon = ({
  className,
  icon = 'question_mark'
}) => (
  <i className={`material-icons material-icons-outlined text-3xl leading-none ${className}`}>
    {icon}
  </i>
)

export default Icon
