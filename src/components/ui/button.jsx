import React from 'react'

const Button = ({ children, onClick, variant = "default", className = "", ...props }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-blue-500"
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export { Button }

